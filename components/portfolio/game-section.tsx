"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Crosshair, Gamepad2, Shield, Trophy } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameSectionProps {
  soundOn: boolean;
}

type Bug = { x: number; y: number; size: number; speed: number };
type Bullet = { x: number; y: number };

const LEADERBOARD = [
  { name: "ORBIT-01", score: 1280 },
  { name: "ANURAG", score: 940 },
  { name: "NEBULA-7", score: 760 },
];

export function GameSection({ soundOn }: GameSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);
  const lastFrameRef = useRef(0);
  const bugsRef = useRef<Bug[]>([]);
  const bulletsRef = useRef<Bullet[]>([]);
  const inputRef = useRef({ left: false, right: false, fire: false, touchActive: false });
  const playerRef = useRef({ x: 200, y: 320 });
  const lastShootRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const livesRef = useRef(3);
  const scoreRef = useRef(0);
  const runningRef = useRef(true);
  const achievementsRef = useRef<string[]>([]);
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [achievements, setAchievements] = useState<string[]>([]);

  const playBeep = useCallback(
    (frequency: number) => {
      if (!soundOn) {
        return;
      }
      const context = new window.AudioContext();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.value = 0.04;
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.05);
      oscillator.onended = () => void context.close();
    },
    [soundOn],
  );

  const resetGame = useCallback(() => {
    bugsRef.current = [];
    bulletsRef.current = [];
    scoreRef.current = 0;
    livesRef.current = 3;
    runningRef.current = true;
    achievementsRef.current = [];
    setScore(0);
    setLives(3);
    setAchievements([]);
    playerRef.current.x = 220;
    setRunning(true);
  }, []);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  useEffect(() => {
    achievementsRef.current = achievements;
  }, [achievements]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) {
      return;
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      playerRef.current.y = rect.height - 36;
    };

    resize();
    window.addEventListener("resize", resize);

    const shoot = () => {
      const now = performance.now();
      if (now - lastShootRef.current < 220) {
        return;
      }
      lastShootRef.current = now;
      bulletsRef.current.push({ x: playerRef.current.x, y: playerRef.current.y - 16 });
      playBeep(540);
    };

    const loop = (timestamp: number) => {
      const delta = Math.min((timestamp - lastFrameRef.current) / 16.67, 2);
      lastFrameRef.current = timestamp;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      context.fillStyle = "rgba(4, 13, 28, 0.95)";
      context.fillRect(0, 0, width, height);

      if (runningRef.current) {
        if (inputRef.current.left) {
          playerRef.current.x -= 5.6 * delta;
        }
        if (inputRef.current.right) {
          playerRef.current.x += 5.6 * delta;
        }
        playerRef.current.x = Math.max(18, Math.min(width - 18, playerRef.current.x));

        if (inputRef.current.fire || inputRef.current.touchActive) {
          shoot();
        }

        spawnTimerRef.current += delta;
        if (spawnTimerRef.current > 25) {
          spawnTimerRef.current = 0;
          bugsRef.current.push({
            x: Math.random() * (width - 22) + 11,
            y: -18,
            size: Math.random() * 10 + 12,
            speed: Math.random() * 1.2 + 1.2,
          });
        }
      }

      bulletsRef.current = bulletsRef.current
        .map((bullet) => ({ ...bullet, y: bullet.y - 8.5 * delta }))
        .filter((bullet) => bullet.y > -12);

      bugsRef.current = bugsRef.current
        .map((bug) => ({ ...bug, y: bug.y + bug.speed * delta }))
        .filter((bug) => {
          if (bug.y > height + 20) {
            livesRef.current -= 1;
            setLives(livesRef.current);
            playBeep(180);
            return false;
          }
          return true;
        });

      bugsRef.current = bugsRef.current.filter((bug) => {
        const hitIndex = bulletsRef.current.findIndex(
          (bullet) =>
            Math.abs(bullet.x - bug.x) < bug.size && Math.abs(bullet.y - bug.y) < bug.size,
        );
        if (hitIndex >= 0) {
          bulletsRef.current.splice(hitIndex, 1);
          scoreRef.current += 10;
          setScore(scoreRef.current);
          playBeep(720);
          return false;
        }
        return true;
      });

      if (scoreRef.current >= 200 && !achievementsRef.current.includes("Bug Hunter")) {
        setAchievements((current) => [...current, "Bug Hunter"]);
      }
      if (
        scoreRef.current >= 500 &&
        !achievementsRef.current.includes("Production Guardian")
      ) {
        setAchievements((current) => [...current, "Production Guardian"]);
      }

      if (livesRef.current <= 0 && runningRef.current) {
        runningRef.current = false;
        setRunning(false);
      }

      context.fillStyle = "#67e8f9";
      context.beginPath();
      context.moveTo(playerRef.current.x, playerRef.current.y - 12);
      context.lineTo(playerRef.current.x - 11, playerRef.current.y + 11);
      context.lineTo(playerRef.current.x + 11, playerRef.current.y + 11);
      context.closePath();
      context.fill();

      context.fillStyle = "#a5f3fc";
      bulletsRef.current.forEach((bullet) => {
        context.fillRect(bullet.x - 1.5, bullet.y - 7, 3, 10);
      });

      bugsRef.current.forEach((bug) => {
        context.strokeStyle = "#fda4af";
        context.fillStyle = "rgba(244, 63, 94, 0.25)";
        context.beginPath();
        context.arc(bug.x, bug.y, bug.size, 0, Math.PI * 2);
        context.fill();
        context.stroke();
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const keyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        inputRef.current.left = true;
      }
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        inputRef.current.right = true;
      }
      if (event.key === " " || event.key === "Enter") {
        inputRef.current.fire = true;
      }
    };

    const keyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        inputRef.current.left = false;
      }
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        inputRef.current.right = false;
      }
      if (event.key === " " || event.key === "Enter") {
        inputRef.current.fire = false;
      }
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [playBeep]);

  const updateTouchPosition = (clientX: number) => {
    if (!containerRef.current) {
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    playerRef.current.x = Math.max(18, Math.min(rect.width - 18, x));
  };

  return (
    <section id="game-zone" className="py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="GAME ZONE"
          title="Protect the production server from bugs"
          description="A built-in arcade challenge engineered for touch and keyboard controls with a glowing futuristic HUD."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="reveal-section overflow-hidden border-cyan-300/25 bg-black/40">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-cyan-200" />
                  Server Defense Arcade
                </span>
                <Badge>{running ? "MISSION ACTIVE" : "SERVER CRITICAL"}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                ref={containerRef}
                className="relative overflow-hidden rounded-2xl border border-white/10"
                onPointerDown={(event) => {
                  inputRef.current.touchActive = true;
                  updateTouchPosition(event.clientX);
                }}
                onPointerMove={(event) => {
                  if (inputRef.current.touchActive) {
                    updateTouchPosition(event.clientX);
                  }
                }}
                onPointerUp={() => {
                  inputRef.current.touchActive = false;
                }}
                onPointerLeave={() => {
                  inputRef.current.touchActive = false;
                }}
              >
                <canvas ref={canvasRef} className="h-[320px] w-full touch-none bg-[#030712]" />
                {!running ? (
                  <div className="absolute inset-0 grid place-items-center bg-black/70">
                    <div className="text-center">
                      <p className="mb-3 text-xl font-semibold text-rose-200">Mission Failed</p>
                      <Button onClick={resetGame}>Retry Mission</Button>
                    </div>
                  </div>
                ) : null}
              </div>
              <p className="text-xs text-zinc-400">
                Controls: ←/→ or A/D to navigate, Space/Enter to fire. Touch and drag on mobile
                to steer and auto-fire.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="reveal-section bg-black/35">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-200" /> Mission HUD
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/45 px-4 py-3">
                  <span className="text-zinc-300">Score</span>
                  <span className="font-semibold text-cyan-100">{score}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/45 px-4 py-3">
                  <span className="text-zinc-300">Lives</span>
                  <span className="font-semibold text-cyan-100">{lives}</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/45 px-4 py-3">
                  <p className="mb-2 flex items-center gap-2 font-medium text-zinc-200">
                    <Trophy className="h-4 w-4 text-amber-200" /> Achievements
                  </p>
                  {achievements.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {achievements.map((achievement) => (
                        <Badge key={achievement} variant="muted">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400">No badges yet. Keep defending.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="reveal-section bg-black/35">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crosshair className="h-5 w-5 text-fuchsia-200" /> Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {LEADERBOARD.map((entry, index) => (
                  <div
                    key={entry.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm"
                  >
                    <span className="text-zinc-300">
                      #{index + 1} {entry.name}
                    </span>
                    <span className="font-semibold text-cyan-100">{entry.score}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
