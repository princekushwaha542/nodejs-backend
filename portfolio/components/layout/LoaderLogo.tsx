"use client";

import { motion } from "framer-motion";

export default function LoaderLogo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-500/30
          blur-[90px]
        "
      />

      {/* Logo */}

      <motion.h1
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          relative
          text-6xl
          font-black
          tracking-[0.35em]
          uppercase
          text-transparent
          bg-gradient-to-r
          from-cyan-400
          via-sky-400
          to-purple-500
          bg-clip-text
        "
      >
        PRINCE
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }}
        className="
          mt-5
          text-center
          text-sm
          tracking-[0.6em]
          uppercase
          text-slate-500
        "
      >
        Full Stack Developer
      </motion.p>
    </motion.div>
  );
}