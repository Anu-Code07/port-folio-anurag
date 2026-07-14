"use client";

import { motion } from "framer-motion";

export function AstronautScene() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: "url('/space-bg.png')" }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_70%)] blur-2xl sm:h-80 sm:w-80"
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/30 sm:h-[470px] sm:w-[470px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
      >
        <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.95)]" />
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(232,121,249,0.9)]" />
        <span className="absolute left-[-5px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
      </motion.div>

      <motion.img
        src="/astronaut.svg"
        alt="Astronaut floating in space next to a planet and rocket"
        draggable={false}
        className="absolute left-1/2 top-1/2 w-[68%] max-w-[360px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_25px_60px_rgba(56,189,248,0.35)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -22, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          y: { duration: 6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
          rotate: { duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
        }}
      />
    </div>
  );
}
