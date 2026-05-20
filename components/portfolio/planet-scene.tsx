"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Stars } from "@react-three/drei";
import type { Mesh } from "three";

import { useMediaQuery } from "@/hooks/use-media-query";

function Planet() {
  const meshRef = useRef<Mesh>(null);

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
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          roughness={0.35}
          metalness={0.45}
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
        <ambientLight intensity={0.45} />
        <pointLight position={[2.5, 2, 2]} intensity={2} color="#67e8f9" />
        <pointLight position={[-3, -1, 1]} intensity={1.8} color="#f0abfc" />
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
