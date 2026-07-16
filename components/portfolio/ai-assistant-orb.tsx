"use client";

import { useState } from "react";
import { Bot, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AiAssistantOrb() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col-reverse items-end gap-3 sm:right-6">
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative grid h-14 w-14 place-items-center rounded-full border border-cyan-200/50 bg-cyan-400/20 text-cyan-100 shadow-[0_0_45px_rgba(34,211,238,0.4)]"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle AI assistant"
      >
        <motion.span
          className="absolute inset-0 rounded-full border border-cyan-100/30"
          animate={{ scale: [1, 1.18, 1], opacity: [0.8, 0.25, 0.8] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
        />
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="w-72 rounded-2xl border border-white/15 bg-black/80 p-4 text-sm backdrop-blur-xl"
          >
            <p className="mb-2 flex items-center gap-2 font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" />
              AI Orb Assistant
            </p>
            <p className="text-zinc-300">
              Try Cmd/Ctrl + K to jump through profile, projects, experience,
              and contact sections.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
