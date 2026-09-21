"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { technologies } from "@/lib/constants";

export default function Technology() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const element = scrollRef.current;

    if (!element) return;

    const maxScrollLeft =
      element.scrollWidth - element.clientWidth;

    setCanScrollLeft(element.scrollLeft > 4);

    setCanScrollRight(
      element.scrollLeft < maxScrollLeft - 4,
    );
  };

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    updateScrollButtons();

    const handleResize = () => {
      updateScrollButtons();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const element = scrollRef.current;

    if (!element) return;

    const amount = Math.min(
      element.clientWidth * 0.7,
      420,
    );

    element.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="border-y border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8">

        {/* =========================================
            SECTION HEADING
        ========================================= */}
        <div className="mb-5">
          {/* Blue accent line */}
          <div
            className="h-1 w-12 rounded-full bg-blue-600"
            aria-hidden="true"
          />

          <h2
            id="technologies-heading"
            className="mt-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl"
          >
            Technologies I Work With
          </h2>
        </div>

        {/* =========================================
            TECHNOLOGY ROW
        ========================================= */}
        <div className="flex min-w-0 items-center">

          {/* Left arrow */}
          {canScrollLeft && (
            <div className="mr-2 flex w-9 shrink-0 items-center justify-center">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll technologies left"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <ChevronLeft
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </div>
          )}

          {/* Technology scroll area */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="scrollbar-none flex min-w-0 flex-1 snap-x snap-mandatory justify-start overflow-x-auto scroll-smooth"
          >
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="group flex w-[108px] shrink-0 snap-start flex-col items-center justify-center gap-2 px-2 py-3 sm:w-[116px] lg:w-[120px]"
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
                  >
                    <Icon
                      size={26}
                      color="default"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Technology name */}
                  <span className="whitespace-nowrap text-center text-[11px] font-medium leading-tight text-slate-600 transition-colors duration-200 group-hover:text-slate-950 sm:text-xs">
                    {technology.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          {canScrollRight && (
            <div className="ml-2 flex w-9 shrink-0 items-center justify-center">
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll technologies right"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <ChevronRight
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}