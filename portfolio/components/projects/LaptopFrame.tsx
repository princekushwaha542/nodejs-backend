"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
}

export default function LaptopFrame({
  image,
  title,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      className="relative mx-auto w-full max-w-2xl"
    >
      {/* Glow */}

      <div
        className="
          absolute
          -inset-6
          rounded-[40px]
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Laptop */}

      <div
        className="
          relative
          rounded-[30px]
          border
          border-white/10
          bg-[#111]
          p-3
          shadow-[0_20px_80px_rgba(0,0,0,.5)]
        "
      >
        {/* Camera */}

        <div className="mb-3 flex justify-center">
          <div className="h-2 w-2 rounded-full bg-zinc-500" />
        </div>

        {/* Screen */}

        <div
          className="
            relative
            aspect-video
            overflow-hidden
            rounded-2xl
            bg-black
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Glass Reflection */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/15
              via-transparent
              to-transparent
            "
          />

          {/* Screen Border */}

          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>

        {/* Trackpad */}

        <div className="mt-5 flex justify-center">
          <div className="h-2 w-28 rounded-full bg-zinc-700" />
        </div>
      </div>

      {/* Laptop Base */}

      <div
        className="
          mx-auto
          h-4
          w-[104%]
          rounded-b-full
          bg-gradient-to-b
          from-zinc-700
          to-zinc-900
        "
      />
    </motion.div>
  );
}