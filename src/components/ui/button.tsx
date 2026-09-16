import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-wide transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-paper text-fg-ink hover:bg-ivory shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_20%,transparent)]",
        sage: "bg-sage text-ink hover:bg-sage-deep",
        outline:
          "bg-transparent text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_22%,transparent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_40%,transparent)] hover:bg-paper/5",
        ghost: "bg-transparent text-paper hover:bg-paper/8",
        ink: "bg-ink text-paper hover:bg-ink-soft",
      },
      size: {
        default: "h-11 rounded-md px-5",
        lg: "h-12 rounded-lg px-6 text-[0.9375rem]",
        sm: "h-9 rounded-sm px-3.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";
