import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-2",
    "rounded-full",
    "font-semibold text-sm",
  ],
  {
    variants: {
      variant: {
        brand: [
          "bg-brand-pale",
          "text-brand-dark",
          "border border-brand/20",
        ],
        neutral: [
          "bg-gray-100",
          "text-gray-600",
        ],
        success: [
          "bg-green-50",
          "text-green-700",
          "border border-green-200",
        ],
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-1.5 text-sm",
        lg: "px-5 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Show animated pulsing dot */
  withDot?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, withDot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {withDot && (
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse-dot" />
        )}
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
