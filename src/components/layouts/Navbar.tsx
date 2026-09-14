"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 lg:h-[72px] lg:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-h-11 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
          aria-label={`${SITE_CONFIG.name} - Home`}
        >
          <span
            className="text-[20px] font-bold leading-none text-[var(--color-blue)]"
            aria-hidden="true"
          >
            RC
          </span>

          <span className="hidden text-sm font-semibold text-[var(--color-ink)] sm:inline">
            Rahul Chourasia
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative flex min-h-11 items-center text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)] ${
                index === 0
                  ? "text-[var(--color-blue)] after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[var(--color-blue)]"
                  : "text-[var(--color-ink)] hover:text-[var(--color-blue)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden min-h-11 items-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-blue)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)] lg:flex"
        >
          Let&apos;s Talk
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>

        {/* Tablet / Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Tablet CTA */}
          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-blue)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)] sm:flex"
          >
            Let&apos;s Talk
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>

          {/* Menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-button)] text-[var(--color-ink)] transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <X size={20} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[var(--color-border)] bg-white transition-[max-height,opacity] duration-200 lg:hidden ${
          isOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav
          className="mx-auto flex max-w-[1200px] flex-col px-5 py-4 sm:px-8"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className={`flex min-h-11 items-center border-b border-slate-100 text-sm font-medium ${
                index === 0
                  ? "text-[var(--color-blue)]"
                  : "text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-blue)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
          >
            Let&apos;s Talk
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}