"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

const skills = [
  {
    name: "React",
    icon: FaReact,
    level: 90,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: 85,
    color: "text-white",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 90,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 70,
    color: "text-blue-500",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: 85,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: SiExpress,
    level: 80,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: 82,
    color: "text-green-400",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 95,
    color: "text-cyan-400",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    level: 95,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    level: 92,
    color: "text-blue-400",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    level: 80,
    color: "text-orange-400",
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          subtitle="Skills"
          title="Technologies I Work With"
          description="A collection of technologies I use to build modern, scalable and high-performance web applications."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
                "
              >
                <div className="flex items-center gap-4">
                  <Icon
                    className={`${skill.color} text-3xl`}
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">
                        {skill.name}
                      </h3>

                      <span className="text-sm text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                        }}
                        className="
                        h-2
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        to-purple-500
                        "
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}