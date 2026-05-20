"use client";

import { useState } from "react";
import { AtSign, Contact, Download, GitBranch, Globe, Mail, Send } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="MISSION CONTROL"
          title="Open a secure communication channel"
          description="Send mission details, collaboration goals, or architecture challenges and receive a high-clarity strategic response."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="reveal-section border-cyan-300/25 bg-black/40">
            <CardHeader>
              <CardTitle>Futuristic Communication Terminal</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input required placeholder="Your Name" />
                  <Input required type="email" placeholder="you@company.com" />
                </div>
                <Input required placeholder="Subject: Mission Brief" />
                <Textarea required placeholder="Describe your mission..." />
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Transmit Message
                </Button>
                {sent ? (
                  <p className="text-sm text-emerald-300">
                    Transmission sent. Mission Control will respond shortly.
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="reveal-section bg-black/35">
              <CardHeader>
                <CardTitle>Direct Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="mailto:anurag@mission.dev"
                >
                  <Mail className="h-4 w-4 text-cyan-100" /> anurag@mission.dev
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Contact className="h-4 w-4 text-cyan-100" /> LinkedIn
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch className="h-4 w-4 text-cyan-100" /> GitHub
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AtSign className="h-4 w-4 text-cyan-100" /> Twitter / X
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="https://anurag.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe className="h-4 w-4 text-cyan-100" /> Personal Domain
                </a>
              </CardContent>
            </Card>

            <Card className="reveal-section bg-black/35">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Available for consulting</Badge>
                <Badge variant="muted">Remote + Hybrid</Badge>
                <Button asChild variant="ghost">
                  <a href="#" download>
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
