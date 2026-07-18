"use client";

import { motion } from "framer-motion";

interface Props {
  tech: string[];
}

export default function ProjectTech({
  tech,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {tech.map((item, index) => (
        <motion.span
          key={item}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
          }}
          whileHover={{
            y: -3,
            scale: 1.05,
          }}
          className="
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/20
            hover:text-white
            hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
          "
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}