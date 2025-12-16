"use client";

import { useRevealOnScroll } from "@/hooks";

interface RevealProviderProps {
  children: React.ReactNode;
}

/**
 * Client component that enables scroll reveal animations.
 * Wrap your page content with this component to activate
 * the reveal animation for elements with the 'reveal' class.
 */
export function RevealProvider({ children }: RevealProviderProps) {
  useRevealOnScroll();

  return <>{children}</>;
}
