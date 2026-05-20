"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

export function InteractiveCursor() {
  const isTouch = useMediaQuery("(hover: none)");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 24, stiffness: 250 });
  const sy = useSpring(y, { damping: 24, stiffness: 250 });

  useEffect(() => {
    if (isTouch) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouch, x, y]);

  if (isTouch) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 h-7 w-7 rounded-full border border-cyan-200/60"
        style={{ x: sx, y: sy }}
      />
      <motion.div
        className="pointer-events-none fixed z-40 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
        style={{ x: sx, y: sy }}
      />
    </>
  );
}
