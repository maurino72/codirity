"use client";

import { useEffect } from "react";

interface UseRevealOnScrollOptions {
  /** CSS selector for elements to reveal */
  selector?: string;
  /** Threshold for intersection (0-1) */
  threshold?: number;
  /** Root margin for earlier/later triggering */
  rootMargin?: string;
}

/**
 * Hook that adds 'visible' class to elements with 'reveal' class
 * when they enter the viewport using Intersection Observer.
 */
export function useRevealOnScroll({
  selector = ".reveal",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: UseRevealOnScrollOptions = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optionally unobserve after revealing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, threshold, rootMargin]);
}
