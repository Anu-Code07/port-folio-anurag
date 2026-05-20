"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-400/20 text-cyan-100 border border-cyan-300/40 hover:bg-cyan-300/25 hover:border-cyan-200/80 shadow-[0_0_40px_rgba(34,211,238,0.2)]",
        ghost:
          "bg-transparent border border-white/20 text-zinc-100 hover:border-white/40 hover:bg-white/10",
        destructive:
          "bg-rose-500/20 border border-rose-400/50 text-rose-100 hover:bg-rose-500/35",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
