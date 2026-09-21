# Rahul Chourasia --- Portfolio

A modern, responsive personal portfolio website for **Rahul Chourasia**,
a Website & Mobile Developer.

The portfolio presents Rahul's technical skills, selected projects,
services, background, and contact information through a clean,
performance-focused single-page experience.

## 🌐 Live Website

**https://rahulchourasia.in**

## ✨ Highlights

-   Responsive design for desktop, tablet, and mobile
-   Modern single-page portfolio experience
-   Website & Mobile Developer positioning
-   Featured projects showcase
-   Technology and skills section
-   Services section
-   About section
-   Contact form with email delivery
-   Cloudflare Turnstile protection
-   Server-side validation and rate limiting
-   SEO metadata and canonical URL
-   Open Graph and Twitter metadata
-   JSON-LD Person structured data
-   Dynamic `robots.txt`
-   Dynamic `sitemap.xml`
-   Security headers and Content Security Policy
-   Optimized images using Next.js Image
-   Accessible keyboard navigation and reduced-motion support
-   Production deployment ready

## 🛠️ Tech Stack

### Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   JavaScript
-   HTML5
-   CSS3

### UI & Icons

-   Lucide React
-   React Simple Icons
-   Font Awesome

### Security & Backend

-   Next.js Route Handlers
-   Cloudflare Turnstile
-   Nodemailer
-   SMTP
-   Server-side input validation
-   Rate limiting
-   Content Security Policy
-   Security HTTP headers

### SEO & Performance

-   Next.js Metadata API
-   Open Graph metadata
-   Twitter metadata
-   JSON-LD structured data
-   `robots.ts`
-   `sitemap.ts`
-   `next/font`
-   Next.js Image optimization

### Development & Deployment

-   Git
-   GitHub
-   Vercel
-   HTTPS
-   Hostinger email

## 📁 Project Structure

``` text
rahulchourasia-portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── about/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── seo/
│   │   └── ui/
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── .env.local
├── next.config.ts
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/rahul0105/rahulchourasia-portfolio.git
cd rahulchourasia-portfolio
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root.

Example:

``` env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contact@rahulchourasia.in
SMTP_PASSWORD=your_hostinger_email_password
CONTACT_EMAIL=contact@rahulchourasia.in

NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

**Never commit `.env.local` or expose secret keys in client-side code.**

### 4. Start the development server

``` bash
npm run dev
```

Open:

``` text
http://localhost:3000
```

### 5. Create a production build

``` bash
npm run build
```

### 6. Start the production server locally

``` bash
npm start
```

## 🔐 Security

Security was considered throughout the application rather than added
only at deployment.

The contact API includes protections such as:

-   Request content-type validation
-   Request body size limits
-   Origin validation
-   Rate limiting
-   Honeypot protection
-   Cloudflare Turnstile verification
-   Server-side input validation
-   Allowlisted project types
-   Email validation
-   HTML escaping
-   Generic error responses
-   Server-side secret handling

The application also uses security-related HTTP headers including:

-   `Content-Security-Policy`
-   `Strict-Transport-Security`
-   `X-Content-Type-Options`
-   `X-Frame-Options`
-   `Referrer-Policy`
-   `Permissions-Policy`

## 🔎 SEO

The portfolio includes:

-   Descriptive page metadata
-   Canonical URL
-   Open Graph metadata
-   Twitter card metadata
-   Robots directives
-   Dynamic sitemap
-   Person JSON-LD structured data
-   Semantic heading hierarchy
-   Descriptive image `alt` text

## ♿ Accessibility

The interface was reviewed for:

-   Semantic HTML
-   Heading hierarchy
-   Keyboard navigation
-   Visible focus states
-   Image alternative text
-   Form accessibility
-   Reduced-motion preferences
-   Responsive readability
-   Color and visual contrast

## 📱 Responsive Design

The layout was tested across:

-   Desktop --- 1440px
-   Desktop --- 1280px
-   Tablet --- 768px
-   Mobile --- 375px
-   Small mobile --- 320px

The implementation is designed to prevent page-level horizontal overflow
while preserving intentional horizontal project scrolling where
required.

## 📬 Contact

For professional inquiries:

**Email:** contact@rahulchourasia.in

**GitHub:** https://github.com/rahul0105

**LinkedIn:** https://www.linkedin.com/in/rahul--chourasia

## 👨‍💻 About

Rahul Chourasia is a Website & Mobile Developer focused on building
responsive, user-focused applications using technologies such as React,
Next.js, and React Native.

## 📄 License

This repository contains a personal portfolio website and its source
code.

The portfolio content, personal branding, photographs, and other
original assets belong to Rahul Chourasia unless otherwise stated.

If you would like to reuse any part of this project, please contact
Rahul first.
