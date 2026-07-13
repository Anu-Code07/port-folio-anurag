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
  title: "Anurag Kumar Singh | Front End Developer",
  description:
    "Front End Developer portfolio for Anurag Kumar Singh, covering React, React Native, Flutter, Next.js, AI tooling, and server-driven UI systems.",
  keywords: [
    "Anurag Kumar Singh",
    "Front End Developer",
    "React Developer",
    "React Native Developer",
    "Flutter Developer",
    "Next.js Portfolio",
    "AI Developer Tooling",
  ],
  openGraph: {
    title: "Anurag Kumar Singh // Front End Developer",
    description:
      "Portfolio featuring frontend products, mobile apps, AI tooling, server-driven UI systems, and production engineering impact.",
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
