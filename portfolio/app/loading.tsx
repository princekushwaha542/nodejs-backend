"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-[#050816]
      "
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "linear",
          }}
          className="
          h-16
          w-16
          rounded-full
          border-4
          border-cyan-400
          border-t-transparent
          "
        />

        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          Prince Kushwaha
        </motion.h1>

        <p className="text-slate-400">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}