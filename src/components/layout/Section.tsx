import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /**
   * Background variant for the section
   * - default: white background
   * - gray: light gray background
   * - gradient: green gradient background
   */
  variant?: "default" | "gray" | "gradient";
  /**
   * Padding size
   * - default: standard section padding
   * - compact: reduced padding
   * - hero: extra padding for hero sections
   */
  padding?: "default" | "compact" | "hero";
}

export function Section({
  id,
  children,
  className,
  variant = "default",
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative z-10",
        // Padding variants
        padding === "default" && "py-16 md:py-24 lg:py-28 px-4 md:px-8",
        padding === "compact" && "py-12 md:py-16 px-4 md:px-8",
        padding === "hero" &&
          "min-h-screen py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16",
        // Background variants
        variant === "default" && "bg-white",
        variant === "gray" && "bg-gray-50",
        variant === "gradient" && [
          "bg-gradient-to-b",
          "from-brand-pale/60 via-brand-glow to-brand-pale/60",
        ],
        className
      )}
    >
      {children}
    </section>
  );
}
