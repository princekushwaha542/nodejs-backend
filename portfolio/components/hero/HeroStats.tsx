"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedication",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.2,
            duration: 0.6,
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            text-center
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            <CountUp
              end={item.value}
              duration={2}
            />
            {item.suffix}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}