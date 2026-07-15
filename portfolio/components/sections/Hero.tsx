"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import HeroBackground from "./HeroBackground";
import { gsap, useGSAP } from "@/hooks/use-gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 60,
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
      className="
      relative
      flex
      min-h-screen
      items-center
      overflow-hidden
      "
    >
      <HeroBackground />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">

          <p
            className="
            hero-item
            mb-5
            text-cyan-400
            font-medium
            "
          >
            Hello, I'm
          </p>


          <h1
            className="
            hero-item
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            sm:text-7xl
            "
          >
            Prince Kushwaha
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Full Stack Developer
            </span>
          </h1>


          <p
            className="
            hero-item
            mt-6
            max-w-2xl
            text-lg
            text-slate-400
            "
          >
            I build modern, scalable and beautiful web
            experiences using React, Next.js and Node.js.
          </p>


          <div
            className="
            hero-item
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >
            <Button href="#projects">
              View Projects
            </Button>

            <Button href="#contact">
              Contact Me
            </Button>
          </div>


        </div>
      </div>


      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
        absolute
        bottom-10
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
          "
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
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