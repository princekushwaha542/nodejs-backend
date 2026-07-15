"use client";

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
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="h-52 rounded-xl bg-slate-800 flex items-center justify-center">
        <span className="text-slate-500">
          Image Placeholder
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-3 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="text-cyan-400"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          className="flex items-center gap-2 text-cyan-400"
        >
          <ExternalLink size={16} />
          Live
        </a>
      </div>
    </div>
  );
}
