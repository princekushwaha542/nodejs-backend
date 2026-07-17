"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "REST API",
  "Postman",
  "Framer Motion",
];

export default function AboutSkills() {
  return (
    <div className="mt-14">
      <h3 className="mb-8 text-2xl font-bold text-white">
        Technologies I Work With
      </h3>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-3
              text-sm
              font-medium
              text-cyan-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/20
              hover:text-white
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}