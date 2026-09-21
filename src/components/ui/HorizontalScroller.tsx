"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HorizontalScrollerProps = {
  children: React.ReactNode;
  className?: string;
  scrollAmount?: number;
  showArrows?: boolean;
};

export default function HorizontalScroller({
  children,
  className = "",
  scrollAmount,
  showArrows = true,
}: HorizontalScrollerProps) {
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

    /*
     * Custom scrolling
     */
    if (scrollAmount !== undefined) {
      element.scrollBy({
        left:
          direction === "right"
            ? scrollAmount
            : -scrollAmount,
        behavior: "smooth",
      });

      return;
    }

    /*
     * Find the actual project/card nearest
     * to the current scroll position.
     */
    const items = Array.from(
      element.children,
    ) as HTMLElement[];

    if (!items.length) return;

    const containerRect =
      element.getBoundingClientRect();

    const currentScrollLeft = element.scrollLeft;

    const itemPositions = items.map((item) => ({
      item,
      left:
        item.getBoundingClientRect().left -
        containerRect.left +
        currentScrollLeft,
    }));

    /*
     * Move to the next item.
     */
    if (direction === "right") {
      const nextItem = itemPositions.find(
        ({ left }) => left > currentScrollLeft + 4,
      );

      if (nextItem) {
        element.scrollTo({
          left: nextItem.left,
          behavior: "smooth",
        });
      }

      return;
    }

    /*
     * Move to the previous item.
     */
    const previousItems = itemPositions.filter(
      ({ left }) => left < currentScrollLeft - 4,
    );

    const previousItem =
      previousItems[previousItems.length - 1];

    element.scrollTo({
      left: previousItem?.left ?? 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-w-0">
      {showArrows && canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-600 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ChevronLeft
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className={`scrollbar-none flex min-w-0 snap-x snap-mandatory overflow-x-auto scroll-smooth ${className}`}
      >
        {children}
      </div>

      {showArrows && canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-600 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ChevronRight
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}