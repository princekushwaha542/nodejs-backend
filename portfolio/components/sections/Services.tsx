"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          subtitle="Services"
          title="What I Can Do"
          description="I build fast, modern and scalable web applications with beautiful user experiences."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}