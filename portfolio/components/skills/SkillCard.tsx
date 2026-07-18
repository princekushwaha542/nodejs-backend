"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SkillCard({
  icon: Icon,
  title,
  description,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
      "
    >
      <div
        className="
          mb-6
          inline-flex
          rounded-2xl
          bg-cyan-500/10
          p-4
          text-cyan-400
          transition
          group-hover:scale-110
        "
      >
        <Icon size={34} />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}