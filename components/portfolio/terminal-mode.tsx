"use client";

import { useEffect, useState } from "react";
import { TerminalSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const logs = [
  "> booting mission-control kernel...",
  "> syncing flutter satellites...",
  "> warming next.js edge nodes...",
  "> diagnostics: all systems operational.",
];

export function TerminalMode() {
  const [open, setOpen] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      return;
    }

    setLineIndex(0);
    const interval = window.setInterval(() => {
      setLineIndex((index) => Math.min(index + 1, logs.length));
    }, 380);

    return () => window.clearInterval(interval);
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "`") {
        setOpen((value) => !value);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        className="fixed bottom-6 left-4 z-40 sm:left-6"
        onClick={() => setOpen((value) => !value)}
      >
        <TerminalSquare className="h-4 w-4" />
        Terminal Mode
      </Button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed inset-x-4 bottom-20 z-40 mx-auto max-w-3xl rounded-2xl border border-white/15 bg-black/85 p-4 backdrop-blur-xl"
          >
            <p className="mb-3 text-xs tracking-[0.35em] text-cyan-100">TERMINAL MODE</p>
            <div className="space-y-1 font-mono text-sm text-emerald-300">
              {logs.slice(0, lineIndex).map((log) => (
                <p key={log}>{log}</p>
              ))}
              <span className="inline-block h-4 w-[2px] animate-pulse bg-emerald-300" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
