"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
}

export function AnimatedCounter({ from = 0, to, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [from, to]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
