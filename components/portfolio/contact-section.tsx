"use client";

import { useState } from "react";
import { Contact, Download, GitBranch, Globe, Mail, MapPin, Phone, Send } from "lucide-react";

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
          eyebrow="CONTACT"
          title="Let's talk frontend, mobile, and AI tooling"
          description="Reach out for product engineering, frontend platform work, React Native/Flutter apps, or developer tooling collaborations."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="reveal-section border-cyan-300/25 bg-black/40">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
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
                <Input required placeholder="Subject" />
                <Textarea required placeholder="Tell me what you are building..." />
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                {sent ? (
                  <p className="text-sm text-emerald-300">
                    Message ready. Please send it through your preferred email client.
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
                  href="mailto:anurag.kr.singh07@gmail.com"
                >
                  <Mail className="h-4 w-4 text-cyan-100" /> anurag.kr.singh07@gmail.com
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="tel:+918892823988"
                >
                  <Phone className="h-4 w-4 text-cyan-100" /> +91 8892823988
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100">
                  <MapPin className="h-4 w-4 text-cyan-100" /> Bengaluru, India
                </div>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="https://www.linkedin.com/in/anurag-kumar-singh-14473718a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Contact className="h-4 w-4 text-cyan-100" /> LinkedIn
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="https://github.com/Anu-Code07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch className="h-4 w-4 text-cyan-100" /> GitHub
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-zinc-100 transition-colors hover:border-cyan-200/70"
                  href="https://port-folio-anurag.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe className="h-4 w-4 text-cyan-100" /> Portfolio
                </a>
              </CardContent>
            </Card>

            <Card className="reveal-section bg-black/35">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Front End Developer</Badge>
                <Badge variant="muted">React Native + Flutter</Badge>
                <Badge variant="muted">Bengaluru / Remote</Badge>
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
