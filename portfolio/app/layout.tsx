import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers";
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
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Prince Kushwaha | Full Stack Developer",
    template: "%s | Prince Kushwaha",
  },

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB and modern web experiences.",

  keywords: [
    "Prince Kushwaha",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Frontend Developer",
    "Full Stack Developer",
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
      "Building premium digital experiences with modern web technologies.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prince Kushwaha | Full Stack Developer",
    description:
      "Building premium digital experiences with modern web technologies.",
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
      <body className="bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}