"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import SkillGrid from "@/components/skills/SkillGrid";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>

        <SectionHeading
          subtitle="Skills"
          title="Technologies I Use"
          description="I build modern, scalable and responsive web applications using the latest technologies and development tools."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20"
        >
          <SkillGrid />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
        </motion.div>

      </Container>
    </Section>
  );
}