"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { projects } from "@/data/projects";

import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);

  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            left-0
            top-20
            h-96
            w-96
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/10
            blur-[160px]
          "
        />

      </div>

      <Container>

        <SectionHeading
          subtitle="Featured Projects"
          title="Things I've Built"
          description="Some of my best work built using modern technologies with beautiful UI and scalable architecture."
        />

        {/* Featured */}

        {featured && (

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-20"
          >
            <ProjectCard
              project={featured}
              featured
            />
          </motion.div>

        )}

        {/* Other Projects */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
          }}
          className="
            mt-24
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          {others.map((project) => (

            <ProjectCard
              key={project.title}
              project={project}
            />

          ))}
        </motion.div>

      </Container>
    </Section>
  );
}