"use client";

import { useEffect, useRef } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frame = 0;
    const stars = Array.from({ length: isMobile ? 120 : 250 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 0.7 + 0.3,
      drift: Math.random() * 0.25 + 0.05,
      radius: Math.random() * 1.8 + 0.4,
    }));

    // Gradients are static per-size, so build them once on resize instead of
    // re-allocating them on every animation frame (a big per-frame cost).
    let backgroundGradient: CanvasGradient | null = null;
    let nebulaGradient: CanvasGradient | null = null;

    const buildGradients = () => {
      backgroundGradient = context.createLinearGradient(0, 0, 0, window.innerHeight);
      backgroundGradient.addColorStop(0, "#030611");
      backgroundGradient.addColorStop(0.55, "#070f24");
      backgroundGradient.addColorStop(1, "#010208");

      nebulaGradient = context.createRadialGradient(
        window.innerWidth * 0.18,
        window.innerHeight * 0.25,
        40,
        window.innerWidth * 0.18,
        window.innerHeight * 0.25,
        window.innerWidth * 0.5,
      );
      nebulaGradient.addColorStop(0, "rgba(79, 70, 229, 0.35)");
      nebulaGradient.addColorStop(0.45, "rgba(6, 182, 212, 0.11)");
      nebulaGradient.addColorStop(1, "rgba(0,0,0,0)");
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      buildGradients();
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId = 0;

    const render = () => {
      frame += 0.008;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (backgroundGradient) {
        context.fillStyle = backgroundGradient;
      }
      context.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y += star.drift * star.z;
        if (star.y > height + 5) {
          star.y = -10;
          star.x = Math.random() * width;
        }

        const alpha = 0.3 + Math.sin(frame + star.x * 0.015) * 0.3 + star.z * 0.4;
        context.fillStyle = `rgba(186, 230, 253, ${alpha})`;
        context.beginPath();
        context.arc(star.x, star.y, star.radius * star.z, 0, Math.PI * 2);
        context.fill();
      });

      if (nebulaGradient) {
        context.fillStyle = nebulaGradient;
        context.fillRect(0, 0, width, height);
      }

      animationId = requestAnimationFrame(render);
    };

    const start = () => {
      if (!animationId) {
        animationId = requestAnimationFrame(render);
      }
    };

    const stop = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = 0;
      }
    };

    // Pause the loop while the tab is hidden to save CPU/GPU and battery.
    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20 opacity-90"
      aria-hidden
    />
  );
}
