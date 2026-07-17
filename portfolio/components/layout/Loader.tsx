"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoaderLogo from "./LoaderLogo";
import LoaderProgress from "./LoaderProgress";
import LoaderText from "./LoaderText";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 600);
      }

      setProgress(value);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            flex-col
            items-center
            justify-center
            overflow-hidden
            bg-[#020617]
          "
        >
          {/* Background Glow */}

          <div
            className="
              absolute
              h-[500px]
              w-[500px]
              rounded-full
              bg-cyan-500/20
              blur-[150px]
            "
          />

          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
              [background-size:60px_60px]
            "
          />

          <LoaderLogo />

          <LoaderText />

          <LoaderProgress progress={progress} />

          <motion.p
            className="
              mt-6
              text-sm
              tracking-[0.4em]
              text-slate-500
            "
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}