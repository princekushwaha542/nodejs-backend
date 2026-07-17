import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Reveal from "@/components/animations/Reveal";
import "./globals.css";

import Providers from "./providers";

import ScrollProgress from "@/components/layout/ScrollProgress";
import MouseGlow from "@/components/layout/MouseGlow";
import CustomCursor from "@/components/layout/CustomCursor";
import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Prince Kushwaha | Full Stack Developer",
    template: "%s | Prince Kushwaha",
  },

  description:
    "Portfolio of Prince Kushwaha, Full Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",

  keywords: [
    "Prince Kushwaha",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Stack",
  ],

  authors: [
    {
      name: "Prince Kushwaha",
    },
  ],

  creator: "Prince Kushwaha",

  openGraph: {
    title: "Prince Kushwaha | Full Stack Developer",

    description:
      "Building modern, scalable and beautiful web experiences using React, Next.js and Node.js.",

    url: "https://your-domain.vercel.app",

    siteName: "Prince Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prince Kushwaha Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Prince Kushwaha | Full Stack Developer",

    description:
      "Building modern, scalable and beautiful web experiences.",

    images: ["/og/og-image.png"],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
      
        className="
          bg-background
          text-foreground
          antialiased
          overflow-x-hidden
        "
      >
        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Mouse Glow */}
        <MouseGlow />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Main App */}
        <Providers>
          {children}
        </Providers>

        {/* Back To Top */}
        <BackToTop />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}