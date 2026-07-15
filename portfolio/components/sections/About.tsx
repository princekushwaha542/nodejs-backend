"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

const stats = [
  {
    value: "10+",
    title: "Projects",
    desc: "Modern full stack applications",
  },
  {
    value: "2+",
    title: "Years Learning",
    desc: "Continuous improvement",
  },
  {
    value: "MERN",
    title: "Stack",
    desc: "MongoDB • Express • React • Node",
  },
];

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          subtitle="About"
          title="Building modern digital experiences."
          description="I enjoy turning ideas into fast, beautiful and scalable web applications using modern technologies."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              "
            >
              <h3 className="text-2xl font-bold">
                Hi 👋 I'm Prince
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                I am a Full Stack Developer who enjoys building
                premium user experiences with React, Next.js,
                Node.js and MongoDB.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                My goal is to create websites that are fast,
                responsive, accessible and visually polished.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                    rounded-full
                    border
                    border-cyan-400/30
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    text-cyan-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="grid gap-6"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
                "
              >
                <h2 className="text-5xl font-bold text-cyan-400">
                  {item.value}
                </h2>

                <h4 className="mt-3 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-2 text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}