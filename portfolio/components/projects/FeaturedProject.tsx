"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import LaptopFrame from "./LaptopFrame";

interface Props {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    live: string;
    tech: string[];
  };
}

export default function FeaturedProject({
  project,
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .8,
      }}
      className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-3xl
      "
    >
      {/* Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="grid items-center gap-16 p-10 lg:grid-cols-2 lg:p-16">

        {/* LEFT */}

        <motion.div
          initial={{
            x: -40,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: .7,
          }}
        >
          <LaptopFrame
            image={project.image}
            title={project.title}
          />
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            x: 40,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: .7,
          }}
        >
          <span
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-xs
              uppercase
              tracking-[.25em]
              text-cyan-300
            "
          >
            Featured Project
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            {project.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {project.description}
          </p>

          {/* Tech */}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-300
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-10 flex gap-4">

            <a
              href={project.github}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                px-6
                py-4
                transition
                hover:border-cyan-400
              "
            >
              <FaGithub size={20} />

              GitHub

            </a>

            <a
              href={project.live}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-cyan-500
                px-6
                py-4
                font-semibold
                text-white
                transition
                hover:bg-cyan-400
              "
            >
              Live Demo

              <ArrowUpRight size={20} />

            </a>

          </div>

        </motion.div>

      </div>

    </motion.section>
  );
}