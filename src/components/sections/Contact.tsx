"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  contactInfo,
  projectTypes,
} from "@/lib/constants";

import { Turnstile } from "@marsidev/react-turnstile";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function Contact() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

    const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      turnstileToken,

      // Honeypot field
      website: formData.get("website"),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to send your message.",
        );
      }

      setStatus("success");
      setStatusMessage(
        "Thanks! Your message has been sent successfully.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
          {/* Contact information */}
          <div>
            <div
              className="h-1 w-12 rounded-full bg-blue-600"
              aria-hidden="true"
            />

            <h2
              id="contact-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              Let's Work Together
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Have a project in mind or just want to connect?
              Feel free to reach out.
            </p>

            <div className="mt-6 space-y-2.5">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-3 text-sm text-slate-700 transition-colors duration-200 hover:text-blue-600"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-blue-600 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  <Mail
                    size={15}
                    strokeWidth={2}
                  />
                </span>

                <span>
                  {contactInfo.email}
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-700 transition-colors duration-200 hover:text-blue-600"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-blue-600 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-4 w-4"
                  />
                </span>

                <span>
                  linkedin.com/in/YOUR_USERNAME
                </span>
              </a>

              {/* GitHub */}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-700 transition-colors duration-200 hover:text-blue-600"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-slate-950 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-4 w-4"
                  />
                </span>

                <span>
                  github.com/YOUR_USERNAME
                </span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your Name"
                  maxLength={100}
                  required
                  disabled={status === "sending"}
                  className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-slate-700"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  maxLength={254}
                  required
                  disabled={status === "sending"}
                  className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>

              {/* Project type */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="project-type"
                  className="mb-1.5 block text-xs font-medium text-slate-700"
                >
                  Project Type
                </label>

                <select
                  id="project-type"
                  name="projectType"
                  defaultValue=""
                  required
                  disabled={status === "sending"}
                  className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50"
                >
                  <option
                    value=""
                    disabled
                  >
                    Select Project Type
                  </option>

                  {projectTypes.map(
                    (type) => (
                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>
                    ),
                  )}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-slate-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={3000}
                  placeholder="Tell me about your project..."
                  required
                  disabled={status === "sending"}
                  className="w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs leading-5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
                
              </div>

              {/* Cloudflare Turnstile */}
<div className="sm:col-span-2">
  <Turnstile
    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    onSuccess={(token) => {
      setTurnstileToken(token);
    }}
    onExpire={() => {
      setTurnstileToken("");
    }}
    onError={() => {
      setTurnstileToken("");
    }}
  />
</div>

              {/* Honeypot */}
              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {status === "sending" ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                        aria-hidden="true"
                      />

                      <span>
                        Sending...
                      </span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <span>
                        Message Sent
                      </span>

                      <span
                        className="text-sm"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        Send Message
                      </span>

                      <ArrowRight
                        size={15}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Status */}
            {statusMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`mt-3 text-center text-xs font-medium ${
                  status === "success"
                    ? "text-emerald-600"
                    : status === "error"
                      ? "text-red-600"
                      : "text-slate-600"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}