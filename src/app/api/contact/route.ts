import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_BODY_BYTES = 10 * 1024; // 10 KB

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 3000;

const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

const allowedProjectTypes = new Set([
  "Web Development",
  "Mobile App Development",
  "Frontend Development",
  "Other",
]);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Simple in-memory rate limiter.
 *
 * Important:
 * This provides an additional protection layer.
 * For distributed/serverless production protection,
 * we will add edge/WAF protection in a later step.
 */
const rateLimitStore = new Map<
  string,
  { count: number; resetAt: number }
>();

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();

  const current = rateLimitStore.get(ip);

  if (!current || now >= current.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  current.count += 1;

  if (current.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
};

const cleanupRateLimitStore = () => {
  const now = Date.now();

  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now >= entry.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
};

const escapeHtml = (value: string) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: Number(process.env.SMTP_PORT ?? 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    /*
     * ----------------------------------------------------
     * 1. Content-Type validation
     * ----------------------------------------------------
     */

    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Unsupported request format.",
        },
        { status: 415 },
      );
    }

    /*
     * ----------------------------------------------------
     * 2. Request size validation
     * ----------------------------------------------------
     */

    const contentLength = request.headers.get("content-length");

    if (contentLength) {
      const contentLengthBytes = Number(contentLength);

      if (
        !Number.isFinite(contentLengthBytes) ||
        contentLengthBytes > MAX_BODY_BYTES
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Request is too large.",
          },
          { status: 413 },
        );
      }
    }

    /*
     * ----------------------------------------------------
     * 3. Rate limiting
     * ----------------------------------------------------
     */

    cleanupRateLimitStore();

    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600",
          },
        },
      );
    }

    /*
     * ----------------------------------------------------
     * 4. Origin validation
     * ----------------------------------------------------
     */

    const origin = request.headers.get("origin");

    if (origin) {
      const allowedOrigin = new URL(request.url).origin;

      if (origin !== allowedOrigin) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid request origin.",
          },
          { status: 403 },
        );
      }
    }

    /*
     * ----------------------------------------------------
     * 5. Read and limit request body
     * ----------------------------------------------------
     */

    const rawBody = await request.text();

    const bodySize = new TextEncoder().encode(rawBody).byteLength;

    if (bodySize > MAX_BODY_BYTES) {
      return NextResponse.json(
        {
          success: false,
          message: "Request is too large.",
        },
        { status: 413 },
      );
    }

    /*
     * ----------------------------------------------------
     * 6. Safe JSON parsing
     * ----------------------------------------------------
     */

    let body: unknown;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request.",
        },
        { status: 400 },
      );
    }

    if (
      typeof body !== "object" ||
      body === null ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request.",
        },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      projectType,
      message,
      website,
      turnstileToken,
    } = body as Record<string, unknown>;

    /*
     * ----------------------------------------------------
     * 7. Honeypot
     * ----------------------------------------------------
     */

    if (typeof website === "string" && website.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to process this request.",
        },
        { status: 400 },
      );
    }

    /*
 * ----------------------------------------------------
 * Turnstile server-side validation
 * ----------------------------------------------------
 */

if (
  typeof turnstileToken !== "string" ||
  !turnstileToken ||
  turnstileToken.length > 2048
) {
  return NextResponse.json(
    {
      success: false,
      message: "Please complete the verification.",
    },
    { status: 400 },
  );
}

const turnstileResponse = await fetch(
  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: clientIp,
    }),
  },
);

if (!turnstileResponse.ok) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Verification service is temporarily unavailable.",
    },
    { status: 503 },
  );
}

const turnstileResult = await turnstileResponse.json();

if (!turnstileResult.success) {
  return NextResponse.json(
    {
      success: false,
      message: "Verification failed. Please try again.",
    },
    { status: 403 },
  );
}
    /*
     * ----------------------------------------------------
     * 8. Type validation
     * ----------------------------------------------------
     */

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof projectType !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request data.",
        },
        { status: 400 },
      );
    }

    /*
     * ----------------------------------------------------
     * 9. Normalize input
     * ----------------------------------------------------
     */

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanProjectType = projectType.trim();
    const cleanMessage = message.trim();

    /*
     * ----------------------------------------------------
     * 10. Name validation
     * ----------------------------------------------------
     */

    if (!cleanName) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your name.",
        },
        { status: 400 },
      );
    }

    if (cleanName.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 },
      );
    }

    /*
     * ----------------------------------------------------
     * 11. Email validation
     * ----------------------------------------------------
     */

    if (
      cleanEmail.length > MAX_EMAIL_LENGTH ||
      !emailRegex.test(cleanEmail)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    /*
     * ----------------------------------------------------
     * 12. Project type allowlist
     * ----------------------------------------------------
     */

    if (!allowedProjectTypes.has(cleanProjectType)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid project type.",
        },
        { status: 400 },
      );
    }

    /*
     * ----------------------------------------------------
     * 13. Message validation
     * ----------------------------------------------------
     */

    if (!cleanMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your message.",
        },
        { status: 400 },
      );
    }

    if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 },
      );
    }

    /*
     * ----------------------------------------------------
     * 14. HTML escaping
     * ----------------------------------------------------
     */

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeProjectType = escapeHtml(cleanProjectType);
    const safeMessage = escapeHtml(cleanMessage).replace(
      /\n/g,
      "<br />",
    );

    /*
     * ----------------------------------------------------
     * 15. Send email
     * ----------------------------------------------------
     */

    await transporter.sendMail({
      from: `"Rahul Chourasia Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: cleanEmail,
      subject: `New Portfolio Inquiry — ${cleanProjectType}`,

      text: `
New portfolio inquiry

Name: ${cleanName}
Email: ${cleanEmail}
Project Type: ${cleanProjectType}

Message:
${cleanMessage}
      `.trim(),

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #0f172a;
          "
        >
          <h2>New Portfolio Inquiry</h2>

          <p>
            <strong>Name:</strong>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong>
            ${safeEmail}
          </p>

          <p>
            <strong>Project Type:</strong>
            ${safeProjectType}
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <p>${safeMessage}</p>
        </div>
      `,
    });

    /*
     * ----------------------------------------------------
     * 16. Success
     * ----------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        message:
          "Thanks! Your message has been sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    /*
     * Do not expose SMTP/server details to the visitor.
     */

    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}