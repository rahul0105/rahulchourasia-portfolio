"use client";

import { useState } from "react";
import {
  ArrowDown,
  Check,
  Code2,
  Monitor,
  Smartphone,
} from "lucide-react";

import { services } from "@/lib/constants";

const serviceIcons = {
  monitor: Monitor,
  smartphone: Smartphone,
  code: Code2,
} as const;

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(
    null,
  );

  const toggleService = (title: string) => {
    setOpenService((current) =>
      current === title ? null : title,
    );
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Section heading */}
        <div className="mb-6">
          <div
            className="h-1 w-12 rounded-full bg-blue-600"
            aria-hidden="true"
          />

          <h2
            id="services-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Services
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Focused development services for individuals, startups and small
            businesses.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
                  aria-hidden="true"
                >
                  <Icon size={23} strokeWidth={2} />
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-1.5 text-sm leading-5 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Tablet / Mobile */}
        <div className="space-y-2.5 lg:hidden">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            const isOpen = openService === service.title;

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggleService(service.title)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 px-3.5 py-3 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  {/* Icon */}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600"
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>

                  {/* Title + description */}
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold text-slate-950 sm:text-sm">
                      {service.title}
                    </span>

                    <span className="mt-0.5 block text-[10px] leading-4 text-slate-500 sm:text-xs">
                      {service.description}
                    </span>
                  </span>

                  {/* Arrow */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center text-blue-600 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowDown
                      size={16}
                      strokeWidth={2}
                    />
                  </span>
                </button>

                {/* Animated content */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-3.5 pb-3.5 pt-2">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-[10px] leading-4 text-slate-600 sm:text-xs"
                          >
                            <Check
                              size={13}
                              strokeWidth={2.5}
                              className="mt-0.5 shrink-0 text-blue-600"
                              aria-hidden="true"
                            />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}