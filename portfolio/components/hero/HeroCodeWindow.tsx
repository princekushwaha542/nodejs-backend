"use client";

import { motion } from "framer-motion";

export default function HeroCodeWindow() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        rotate: 4,
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: 0,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        x: { duration: 0.8 },
        rotate: { duration: 0.8 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="
        relative
        w-full
        max-w-xl
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0f172a]/80
        shadow-2xl
        backdrop-blur-2xl
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />

        <div className="ml-4 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-400">
          portfolio.tsx
        </div>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-6 text-sm leading-8">
        <code>
{`const developer = {
  name: "Prince Kushwaha",

  role: "Full Stack Developer",

  stack: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript"
  ],

  passion: "Building premium web apps",

  available: true,
};

export default developer;`}
        </code>
      </pre>

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/2
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />
    </motion.div>
  );
}
