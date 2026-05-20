"use client";

import { useEffect, useMemo, useState } from "react";

interface AnimatedTypewriterProps {
  lines: string[];
}

export function AnimatedTypewriter({ lines }: AnimatedTypewriterProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const activeLine = useMemo(() => lines[lineIndex] ?? "", [lineIndex, lines]);

  useEffect(() => {
    const isLineComplete = charIndex === activeLine.length;
    const isLineEmpty = charIndex === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && isLineComplete) {
          setDeleting(true);
          return;
        }

        if (deleting && isLineEmpty) {
          setDeleting(false);
          setLineIndex((index) => (index + 1) % lines.length);
          return;
        }

        setCharIndex((index) => (deleting ? index - 1 : index + 1));
      },
      isLineComplete || isLineEmpty ? 950 : deleting ? 40 : 65,
    );

    return () => clearTimeout(timeout);
  }, [activeLine.length, charIndex, deleting, lines.length]);

  return (
    <p className="min-h-8 text-sm text-cyan-100 sm:text-lg">
      {activeLine.slice(0, charIndex)}
      <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-cyan-200" />
    </p>
  );
}
