"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 10,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    number: 15,
    suffix: "+",
    title: "Technologies",
  },
  {
    number: 1500,
    suffix: "+",
    title: "Learning Hours",
  },
  {
    number: 100,
    suffix: "%",
    title: "Passion",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            text-center
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
          "
        >
          <h3 className="text-4xl font-bold text-cyan-400">
            <CountUp
              end={stat.number}
              duration={2.5}
            />
            {stat.suffix}
          </h3>

          <p className="mt-3 text-slate-400">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}