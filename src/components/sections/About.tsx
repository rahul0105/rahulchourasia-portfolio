"use client";

import Image from "next/image";
import {
  MapPin,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/about/about.webp"
              alt="Rahul Chourasia workspace"
              width={700}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Right Content */}

          <div>
            {/* Blue Line */}

            <div
              className="h-1 w-12 rounded-full bg-blue-600"
              aria-hidden="true"
            />

            <h2
              id="about-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              About Me
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              I'm Rahul Chourasia, a frontend and mobile developer based in
              India. I enjoy building practical, user-friendly applications
              that solve real problems.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              When I'm not coding, I like exploring new technologies,
              improving my development skills, and creating clean digital
              experiences with modern web technologies.
            </p>

            {/* Badges */}

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {/* India */}

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-b from-orange-100 via-white to-green-100">
                  <MapPin
                    size={20}
                    className="text-orange-500"
                    strokeWidth={2.2}
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Based in
                  </p>

                  <p className="text-sm font-semibold text-slate-900">
                    India
                  </p>
                </div>
              </div>

              {/* Freelance */}

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <BriefcaseBusiness
                    size={20}
                    className="text-blue-600"
                    strokeWidth={2.2}
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Open to
                  </p>

                  <p className="text-sm font-semibold text-slate-900">
                    Freelance Work
                  </p>
                </div>
              </div>

              {/* Collaboration */}

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50">
                  <Users
                    size={20}
                    className="text-cyan-600"
                    strokeWidth={2.2}
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Available for
                  </p>

                  <p className="text-sm font-semibold text-slate-900">
                    Collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}