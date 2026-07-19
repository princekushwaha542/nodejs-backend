"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { projects } from "@/data/projects";

import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const featured = projects.find((project) => project.featured);

  const others = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

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
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/10
            blur-[170px]
          "
        />
      </div>

      <Container>
        <SectionHeading
          subtitle="Selected Work"
          title="Featured Projects"
          description="A collection of projects showcasing my frontend, backend and full-stack development skills."
        />

        {/* Featured Project */}

        {featured && (
          <motion.div
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
              duration: 0.8,
            }}
            className="mt-20"
          >
            <FeaturedProject
              project={featured}
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
            delay: 0.2,
          }}
          className="
            mt-24
            grid
            gap-10
            md:grid-cols-2
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