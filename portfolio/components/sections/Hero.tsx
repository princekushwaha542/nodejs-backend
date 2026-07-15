"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import { gsap, useGSAP } from "@/hooks/use-gsap";
import MagneticButton from "@/components/shared/MagneticButton";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* Small Heading */}

          <p
            className="
            hero-item
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-cyan-400
            "
          >
            Hello, I'm
          </p>

          {/* Main Heading */}

          <h1
            className="
            hero-item
            text-4xl
            font-extrabold
            leading-tight
            tracking-tight
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            "
          >
            Prince Kushwaha
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Full Stack Developer
            </span>
          </h1>

          {/* Description */}

          <p
            className="
            hero-item
            mt-6
            max-w-xl
            text-base
            leading-8
            text-slate-400
            md:text-lg
            "
          >
            I build modern, scalable and high-performance web
            applications using React, Next.js, Node.js and
            MongoDB with clean UI and exceptional user
            experience.
          </p>

          {/* Buttons */}

          <div
            className="
            hero-item
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >
            <MagneticButton href="#projects">
              View Projects
            </MagneticButton>

            <MagneticButton href="#contact">
              Contact Me
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        "
      >
        <div
          className="
          flex
          h-12
          w-6
          justify-center
          rounded-full
          border
          border-white/20
          p-2
          backdrop-blur-md
          "
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            h-2
            w-2
            rounded-full
            bg-cyan-400
            "
          />
        </div>
      </motion.div>
    </section>
  );
}