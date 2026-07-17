"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import HeroCodeWindow from "@/components/hero/HeroCodeWindow";
import FloatingIcons from "@/components/hero/FloatingIcons";

export default function Hero() {
  return (
    <Section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
      "
    >
      <HeroBackground />

      <FloatingIcons />

      <Container>
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative"
          >
            <HeroCodeWindow />
          </motion.div>
        </div>
      </Container>

      {/* Bottom Glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-64
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />
    </Section>
  );
}