"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";

import { commandActions } from "@/lib/portfolio-data";

interface CommandPaletteProps {
  onNavigate: (selector: string) => void;
}

export function CommandPalette({ onNavigate }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const openPalette = () => setOpen(true);
    window.addEventListener("open-command-palette", openPalette);

    return () => window.removeEventListener("open-command-palette", openPalette);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-4 pt-24 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <Command
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-black/80 p-2 shadow-[0_0_60px_rgba(56,189,248,0.25)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-2 flex items-center gap-2 border-b border-white/10 px-3 pb-2">
          <Search className="h-4 w-4 text-cyan-200" />
          <Command.Input
            className="w-full bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-400"
            placeholder="Search mission commands..."
          />
        </div>
        <Command.List className="max-h-80 overflow-y-auto">
          <Command.Empty className="p-3 text-sm text-zinc-400">
            No command found.
          </Command.Empty>
          <Command.Group heading="Navigation" className="text-zinc-300">
            {commandActions.map((action) => (
              <Command.Item
                key={action.value}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm text-zinc-100 aria-selected:bg-cyan-500/20"
                onSelect={() => {
                  onNavigate(action.selector);
                  setOpen(false);
                }}
              >
                {action.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
