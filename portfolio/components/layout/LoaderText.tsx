"use client";

import { motion } from "framer-motion";

export default function LoaderText() {
  return (
    <div className="mt-10 flex flex-col items-center">

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          text-xl
          font-semibold
          text-white
        "
      >
        Loading Portfolio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          delay: 0.2,
          repeat: Infinity,
        }}
        className="
          mt-3
          max-w-md
          text-center
          text-sm
          text-slate-400
        "
      >
        Preparing an interactive experience...
      </motion.p>

      <motion.div
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          mt-6
          flex
          gap-2
        "
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        <span className="h-2 w-2 rounded-full bg-sky-400" />
        <span className="h-2 w-2 rounded-full bg-purple-500" />
      </motion.div>
    </div>
  );
}