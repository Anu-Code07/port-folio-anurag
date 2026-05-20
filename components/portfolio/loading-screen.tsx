"use client";

import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  show: boolean;
}

export function LoadingScreen({ show }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-[#04050e]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            className="relative h-36 w-36 rounded-full border border-cyan-300/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
            <div className="absolute inset-6 rounded-full border border-fuchsia-300/30" />
            <div className="absolute inset-12 rounded-full bg-cyan-100/10 blur-sm" />
          </motion.div>
          <motion.p
            className="text-xs tracking-[0.5em] text-zinc-300"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
          >
            INITIALIZING STARFIELD
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
