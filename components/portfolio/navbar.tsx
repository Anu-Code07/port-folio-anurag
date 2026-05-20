"use client";

import { useState } from "react";
import { Command, Menu, Rocket, Volume2, VolumeOff, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Mission", selector: "#about" },
  { label: "Projects", selector: "#projects" },
  { label: "Game Zone", selector: "#game-zone" },
  { label: "Experience", selector: "#experience" },
  { label: "Mission Control", selector: "#contact" },
];

interface NavbarProps {
  onNavigate: (selector: string) => void;
  onOpenCommand: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
  onLogoTap: () => void;
}

export function Navbar({
  onNavigate,
  onOpenCommand,
  soundOn,
  onToggleSound,
  onLogoTap,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl">
        <button
          type="button"
          className="group flex items-center gap-2"
          onClick={() => {
            onNavigate("#hero");
            onLogoTap();
          }}
          aria-label="Return to hero section"
        >
          <Rocket className="h-5 w-5 text-cyan-200 transition-transform group-hover:translate-y-[-2px]" />
          <span className="text-sm font-semibold tracking-[0.2em] text-zinc-100">
            ANURAG.OS
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button
              key={link.label}
              type="button"
              variant="ghost"
              size="default"
              className="h-9 px-4"
              onClick={() => onNavigate(link.selector)}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Open command palette"
            onClick={onOpenCommand}
          >
            <Command className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Toggle ambient sound"
            onClick={onToggleSound}
          >
            {soundOn ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeOff className="h-4 w-4" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle mobile navigation"
            onClick={() => setOpen((state) => !state)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl transition-all md:hidden",
          open ? "max-h-80 opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="p-3">
          {links.map((link) => (
            <button
              type="button"
              key={link.label}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-100 transition-colors hover:bg-white/10"
              onClick={() => {
                onNavigate(link.selector);
                setOpen(false);
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
