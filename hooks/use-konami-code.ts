"use client";

import { useEffect } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(onUnlock: () => void) {
  useEffect(() => {
    const keys: string[] = [];

    const onKeyDown = (event: KeyboardEvent) => {
      keys.push(event.key);

      if (keys.length > KONAMI_CODE.length) {
        keys.shift();
      }

      const isMatch = KONAMI_CODE.every(
        (code, index) => code.toLowerCase() === keys[index]?.toLowerCase(),
      );

      if (isMatch) {
        onUnlock();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onUnlock]);
}
