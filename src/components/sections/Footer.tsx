"use client";

import {
  ArrowRight,
  ArrowUp,
  Mail,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA + Navigation */}
        <div className="grid gap-10 py-12 sm:py-14 md:grid-cols-[1.5fr_0.8fr] md:gap-12 lg:gap-20 lg:py-16">
          
          {/* CTA */}
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Let's work together
            </p>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Let's build something
              <span className="text-blue-600">
                {" "}meaningful together.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              Have a project in mind? Let's talk about your
              ideas and turn them into a modern digital
              experience.
            </p>

            <a
              href="mailto:contact@rahulchourasia.in"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              Email Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Navigation */}
          <div className="md:pt-2">
            <h3 className="text-sm font-semibold text-slate-950">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-5"
            >
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-block text-sm text-slate-500 transition-colors hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="text-sm font-semibold text-slate-950 transition-colors hover:text-blue-600"
              >
                Rahul Chourasia
              </a>

              <p className="mt-1 text-xs text-slate-500">
                Website & Mobile Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/rahul0105/"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-200 hover:text-blue-600"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-4 w-4"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rahul--chourasia/"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-200 hover:text-blue-600"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-4 w-4"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:contact@rahulchourasia.in"
                aria-label="Email Rahul Chourasia"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-200 hover:text-blue-600"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-5 flex flex-row items-center justify-between gap-4 border-t border-slate-100 pt-5 text-xs text-slate-400">
            <p className="max-w-[65%] leading-5">
  © {currentYear} Rahul Chourasia. All rights reserved.
</p>
            <button
              type="button"
              onClick={handleBackToTop}
              className="inline-flex w-fit items-center gap-1.5 text-slate-500 transition-colors hover:text-blue-600"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}