"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";

export default function Projects() {
  const featured = projects.find((project) => project.featured);

  const others = projects.filter((project) => !project.featured);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          subtitle="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills in frontend, backend and full-stack development."
        />

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <ProjectCard
              project={featured}
              featured={true}
            />
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {others.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}