"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
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
    <article
      className={`
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
        ${featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""}
      `}
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {featured && (
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-cyan-500
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-col justify-between p-8">
        <div>
          <h3
            className="
              text-3xl
              font-bold
              transition-colors
              duration-300
              group-hover:text-cyan-400
            "
          >
            {project.title}
          </h3>

          <p className="mt-5 leading-7 text-slate-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-3
                  py-1
                  text-xs
                  text-cyan-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              transition
              hover:border-cyan-400
              hover:text-cyan-400
            "
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-cyan-400
            "
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}