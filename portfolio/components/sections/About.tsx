"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import AboutContent from "@/components/about/AboutContent";
import AboutCards from "@/components/about/AboutCards";
import AboutStats from "@/components/about/AboutStats";
import AboutSkills from "@/components/about/AboutSkills";

export default function About() {
  return (
    <Section id="about">
      <Container>

        <SectionHeading
          subtitle="About Me"
          title="Know More About Me"
          description="Passionate Full Stack Developer focused on building modern, scalable and user-friendly web applications."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <AboutContent />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <AboutCards />
          </motion.div>

        </div>

        <AboutStats />

        <AboutSkills />

      </Container>
    </Section>
  );
}