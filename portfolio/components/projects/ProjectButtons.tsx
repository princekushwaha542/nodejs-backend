"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  github: string;
  live: string;
}

export default function ProjectButtons({
  github,
  live,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {/* GitHub Button */}

      <motion.a
        whileHover={{
          y: -3,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-6
          py-3
          font-medium
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-cyan-500/10
          hover:text-cyan-400
        "
      >
        <FaGithub size={20} />
        GitHub
      </motion.a>

      {/* Live Demo Button */}

      <motion.a
        whileHover={{
          y: -3,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-sky-500
          px-6
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
        "
      >
        <ExternalLink size={20} />
        Live Demo
      </motion.a>
    </div>
  );
}