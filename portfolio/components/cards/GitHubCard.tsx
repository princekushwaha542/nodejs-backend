"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type Repository = {
  name: string;
  description: string;
  tech: string;
  url: string;
};

type Props = {
  repo: Repository;
};

export default function GitHubCard({
  repo,
}: Props) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        block
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        hover:border-cyan-400/40
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <Image
            src="https://github.com/princekushwaha542.png"
            alt="Prince"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>
            <h3 className="text-xl font-bold">
              {repo.name}
            </h3>

            <p className="text-sm text-slate-400">
              {repo.tech}
            </p>
          </div>
        </div>

        <ArrowUpRight
          className="
            transition
            group-hover:rotate-45
          "
        />
      </div>

      <p
        className="
          mt-6
          leading-7
          text-slate-400
        "
      >
        {repo.description}
      </p>

      <div
        className="
          mt-6
          flex
          items-center
          gap-2
          text-cyan-400
        "
      >
        <Github size={18} />

        <span className="font-medium">
          View Repository
        </span>
      </div>
    </motion.a>
  );
}