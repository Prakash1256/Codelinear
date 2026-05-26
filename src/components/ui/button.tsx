import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-14 items-center justify-center rounded-[8px] px-9 font-mono text-[12px] font-semibold uppercase tracking-[0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(100deg,#12b8ff_0%,#0751df_100%)] text-white shadow-[0_18px_42px_rgba(0,120,255,0.24)] hover:brightness-110 hover:shadow-[0_22px_52px_rgba(0,120,255,0.34)]",
        outline:
          "border border-white/80 bg-transparent text-white hover:border-sky-300 hover:bg-white/[0.04]",
        ghost:
          "h-auto rounded-none border-b border-sky-400/80 px-0 py-1 text-sky-400 hover:text-sky-200"
      },
      size: {
        default: "min-w-[190px]",
        sm: "h-10 min-w-[150px] px-6 text-[10px]",
        lg: "h-16 min-w-[220px] px-11 text-[13px]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
