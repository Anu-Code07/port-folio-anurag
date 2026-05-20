"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { CanvasTexture, RepeatWrapping, SRGBColorSpace, type Mesh } from "three";

import { useMediaQuery } from "@/hooks/use-media-query";

function useMoonTexture() {
  const texture = useMemo(() => {
    const size = 768;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");

    if (!context) {
      return new CanvasTexture(canvas);
    }

    const gradient = context.createRadialGradient(
      size * 0.35,
      size * 0.28,
      size * 0.12,
      size * 0.5,
      size * 0.5,
      size * 0.72,
    );
    gradient.addColorStop(0, "#f1f5f9");
    gradient.addColorStop(0.45, "#d1d5db");
    gradient.addColorStop(1, "#6b7280");
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    // Layer soft grain to avoid a flat synthetic look.
    for (let i = 0; i < 16000; i += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const alpha = Math.random() * 0.11;
      const shade = Math.floor(Math.random() * 55) + 155;
      context.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${alpha})`;
      context.fillRect(x, y, 1.3, 1.3);
    }

    // Add crater fields with highlight + shadow for moon-like relief.
    for (let i = 0; i < 95; i += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = Math.random() * 44 + 8;

      context.beginPath();
      context.fillStyle = `rgba(55, 65, 81, ${Math.random() * 0.3 + 0.1})`;
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.strokeStyle = `rgba(226, 232, 240, ${Math.random() * 0.25 + 0.08})`;
      context.lineWidth = Math.max(1, radius * 0.085);
      context.arc(x - radius * 0.1, y - radius * 0.1, radius * 0.82, 0, Math.PI * 2);
      context.stroke();
    }

    const map = new CanvasTexture(canvas);
    map.wrapS = RepeatWrapping;
    map.wrapT = RepeatWrapping;
    map.colorSpace = SRGBColorSpace;
    return map;
  }, []);

  useEffect(() => {
    return () => texture.dispose();
  }, [texture]);

  return texture;
}

function Planet() {
  const meshRef = useRef<Mesh>(null);
  const moonTexture = useMoonTexture();

  useFrame((_, delta) => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere args={[1.4, 64, 64]} ref={meshRef}>
        <meshStandardMaterial
          map={moonTexture}
          bumpMap={moonTexture}
          bumpScale={0.055}
          roughnessMap={moonTexture}
          color="#d1d5db"
          emissive="#0f172a"
          emissiveIntensity={0.1}
          roughness={0.96}
          metalness={0.04}
        />
      </Sphere>
    </Float>
  );
}

export function PlanetScene() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 52 }} dpr={isMobile ? [1, 1.2] : [1, 1.8]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.24} />
        <hemisphereLight args={["#f8fafc", "#020617", 0.36]} />
        <pointLight position={[2.8, 2, 2.2]} intensity={2.3} color="#e2e8f0" />
        <pointLight position={[-2.2, -1, 1]} intensity={0.5} color="#93c5fd" />
        <Stars radius={45} depth={22} count={2000} factor={3} saturation={0} fade />
        <Planet />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}
