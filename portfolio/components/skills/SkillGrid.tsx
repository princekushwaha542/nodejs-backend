"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function SkillGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -8,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            transition-all
            hover:border-cyan-400/40
            hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
          "
        >
          <h3 className="mb-8 text-2xl font-bold">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-4
                    transition-all
                    hover:border-cyan-400
                  "
                >
                  <Icon
                    size={24}
                    className="text-cyan-400"
                  />

                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}