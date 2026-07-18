"use client";

import { motion } from "framer-motion";

import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";
import ProjectTech from "./ProjectTech";
import ProjectButtons from "./ProjectButtons";

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
  featured?: boolean;
};

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_25px_80px_rgba(34,211,238,.18)]

        ${
          featured
            ? "grid lg:grid-cols-[1.2fr_1fr] items-center gap-12 p-10 lg:p-14"
            : "flex flex-col p-8"
        }
      `}
    >
      {/* Animated Border */}

      <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-700 group-hover:opacity-100" />

      {/* LEFT */}

      <div className="relative z-10">
        <ProjectImage
          image={project.image}
          title={project.title}
          featured={featured}
        />
      </div>

      {/* RIGHT */}

      <div className="relative z-10 flex flex-col justify-center">
        <ProjectContent
          title={project.title}
          description={project.description}
        />

        <ProjectTech tech={project.tech} />

        <ProjectButtons
          github={project.github}
          live={project.live}
        />
      </div>
    </motion.article>
  );
}