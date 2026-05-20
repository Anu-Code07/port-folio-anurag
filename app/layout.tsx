import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag | Futuristic Senior Flutter + Full Stack Portfolio",
  description:
    "A cinematic, space-themed, highly interactive developer portfolio built with Next.js 15, Framer Motion, GSAP, and Three.js.",
  keywords: [
    "Senior Flutter Developer",
    "Full Stack Web Developer",
    "Next.js Portfolio",
    "Cinematic UI",
    "Interactive 3D Website",
  ],
  openGraph: {
    title: "Anurag // Building Digital Universes",
    description:
      "Premium sci-fi inspired portfolio featuring immersive animations, interactive 3D, and full-stack engineering craft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#02040b] font-sans text-zinc-100">
        {children}
      </body>
    </html>
  );
}
