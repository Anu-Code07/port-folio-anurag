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

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId = 0;

    const render = () => {
      frame += 0.008;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const bg = context.createLinearGradient(0, 0, 0, window.innerHeight);
      bg.addColorStop(0, "#030611");
      bg.addColorStop(0.55, "#070f24");
      bg.addColorStop(1, "#010208");
      context.fillStyle = bg;
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach((star) => {
        star.y += star.drift * star.z;
        if (star.y > window.innerHeight + 5) {
          star.y = -10;
          star.x = Math.random() * window.innerWidth;
        }

        const alpha = 0.3 + Math.sin(frame + star.x * 0.015) * 0.3 + star.z * 0.4;
        context.fillStyle = `rgba(186, 230, 253, ${alpha})`;
        context.beginPath();
        context.arc(star.x, star.y, star.radius * star.z, 0, Math.PI * 2);
        context.fill();
      });

      const nebula = context.createRadialGradient(
        window.innerWidth * 0.18,
        window.innerHeight * 0.25,
        40,
        window.innerWidth * 0.18,
        window.innerHeight * 0.25,
        window.innerWidth * 0.5,
      );
      nebula.addColorStop(0, "rgba(79, 70, 229, 0.35)");
      nebula.addColorStop(0.45, "rgba(6, 182, 212, 0.11)");
      nebula.addColorStop(1, "rgba(0,0,0,0)");
      context.fillStyle = nebula;
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
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
