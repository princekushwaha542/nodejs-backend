"use client";

import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { navigation } from "@/constants/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      border-b
      border-white/10
      bg-black/30
      backdrop-blur-xl
      "
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
              text-sm
              text-slate-300
              transition-all
              duration-300
              hover:text-cyan-400
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="
          rounded-full
          bg-cyan-500
          px-5
          py-2.5
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:bg-cyan-400
          "
        >
          Let's Talk
        </Link>

      </Container>
    </header>
  );
}