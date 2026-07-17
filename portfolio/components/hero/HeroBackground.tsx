"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Aurora 1 */}

      <motion.div
        animate={{
          x: [-80, 120, -80],
          y: [-60, 80, -60],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* Aurora 2 */}

      <motion.div
        animate={{
          x: [80, -120, 80],
          y: [50, -80, 50],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-500/20
          blur-[150px]
        "
      />

      {/* Aurora 3 */}

      <motion.div
        animate={{
          y: [0, -80, 0],
          x: [0, 60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-20%]
          left-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/15
          blur-[130px]
        "
      />

      {/* Radial Glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]
        "
      />

    </div>
  );
}