"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function ProjectContent({
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="space-y-5"
    >
      <h3
        className="
          text-3xl
          font-bold
          tracking-tight
          transition-colors
          duration-300
          group-hover:text-cyan-400
        "
      >
        {title}
      </h3>

      <p
        className="
          leading-8
          text-slate-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
}