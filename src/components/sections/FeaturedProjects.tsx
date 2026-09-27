"use client";

import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import HorizontalScroller from "@/components/ui/HorizontalScroller";
import { featuredProjects } from "@/lib/constants";


function ProjectActions({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  const [notice, setNotice] = useState<string | null>(null);

  const actionClass =
  "m-0 inline-flex shrink-0 cursor-pointer appearance-none items-center gap-1 whitespace-nowrap border-0 bg-transparent p-0 text-xs !font-semibold !text-slate-950 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:text-sm!";

const codeActionClass =
  "m-0 inline-flex shrink-0 cursor-pointer appearance-none items-center gap-1.5 whitespace-nowrap border-0 bg-transparent p-0 text-xs !font-semibold !text-slate-950 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:text-sm!";

  useEffect(() => {
    if (!notice) return;

    const timeout = window.setTimeout(() => {
      setNotice(null);
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [notice]);

  const showInProgressMessage = (type: "Live Demo" | "View Code") => {
    setNotice(
      type === "Live Demo"
        ? "Coming soon — this project is currently in progress."
        : "Coming soon — source code for this project is currently in progress.",
    );
  };

  return (
    <>
      {/* Actions */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            Live Demo
            <ArrowRight
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => showInProgressMessage("Live Demo")}
            className={actionClass}
          >
            Live Demo
            <ArrowRight
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        )}

        {project.codeUrl ? (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={codeActionClass}
          >
            View Code
            <SiGithub
              size={16}
              color="default"
              aria-hidden="true"
            />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => showInProgressMessage("View Code")}
            className={codeActionClass}
          >
            View Code
            <SiGithub
              size={16}
              color="default"
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {notice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 flex w-[min(360px,calc(100vw-40px))] items-start gap-3 rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-lg"
        >
          <div className="flex-1">
            <p className="font-semibold text-slate-950">Coming Soon</p>
            <p className="mt-0.5 text-xs leading-5 text-slate-600">
              {notice}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setNotice(null)}
            aria-label="Close notification"
            className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Section heading */}
        <div className="mb-6">
          <div
            className="h-1 w-12 rounded-full bg-blue-600"
            aria-hidden="true"
          />

          <h2
            id="projects-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Featured Projects
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            A selection of my recent work. Each project is built with a focus
            on clean design, performance and real-world functionality.
          </p>
        </div>

        {/* Projects */}
        <HorizontalScroller
          showArrows
          className="gap-4 pb-2 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0"
        >
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="w-full shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md lg:w-auto"
            >
              {/* Project image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>

              {/* Project content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-950 sm:text-base">
                  {project.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-600 sm:text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-700 sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <ProjectActions project={project} />
              </div>
            </article>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  );
}