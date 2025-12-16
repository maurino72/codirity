import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Maximum width of the container
   * - default: 1400px (standard content width)
   * - narrow: 1200px (for focused content like process section)
   * - wide: 100% (full width with padding)
   */
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        size === "default" && "max-w-[1400px]",
        size === "narrow" && "max-w-[1200px]",
        size === "wide" && "max-w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
