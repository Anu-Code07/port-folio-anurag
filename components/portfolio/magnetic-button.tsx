"use client";

import { type MouseEvent, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export function MagneticButton({
  className,
  children,
  strength = 24,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 14, stiffness: 170, mass: 0.1 });
  const sy = useSpring(y, { damping: 14, stiffness: 170, mass: 0.1 });

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set((offsetX / rect.width) * strength);
    y.set((offsetY / rect.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Button
        ref={ref}
        className={cn("group overflow-hidden", className)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        {...props}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(186,230,253,0.4),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative">{children}</span>
      </Button>
    </motion.div>
  );
}
