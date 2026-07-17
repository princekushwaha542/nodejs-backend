"use client";

import { motion } from "framer-motion";

type Props = {
  progress: number;
};

export default function LoaderProgress({
  progress,
}: Props) {
  return (
    <div className="mt-12 w-80 max-w-[85vw]">
      {/* Background */}

      <div
        className="
          relative
          h-2
          overflow-hidden
          rounded-full
          bg-white/10
          backdrop-blur-md
        "
      >
        {/* Progress */}

        <motion.div
          className="
            absolute
            left-0
            top-0
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-purple-500
          "
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        />

        {/* Shine */}

        <motion.div
          animate={{
            x: ["-120%", "250%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            h-full
            w-20
            -skew-x-12
            bg-white/40
            blur-sm
          "
        />
      </div>

      {/* Labels */}

      <div
        className="
          mt-4
          flex
          items-center
          justify-between
          text-xs
          uppercase
          tracking-[0.25em]
          text-slate-500
        "
      >
        <span>Loading</span>

        <span>{progress}%</span>
      </div>
    </div>
  );
}