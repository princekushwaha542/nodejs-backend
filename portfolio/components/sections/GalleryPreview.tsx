"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Images, ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

export default function GalleryPreview() {
  return (
    <Section
      id="gallery"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <Container>
        <SectionHeading
          subtitle="Gallery"
          title="Moments & Memories"
          description="A collection of my journey, workspace, achievements and memorable moments."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="
            mx-auto
            mt-16
            max-w-4xl
          "
        >
          <Link href="/gallery">
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-16
                text-center
                backdrop-blur-3xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_20px_80px_rgba(34,211,238,.18)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <Images
                  size={70}
                  className="mx-auto text-cyan-400"
                />

                <h3 className="mt-8 text-4xl font-bold">
                  Open Gallery
                </h3>

                <p className="mx-auto mt-5 max-w-xl text-slate-400">
                  Explore my collection of 9 memorable photos with a premium full-screen gallery experience.
                </p>

                <div
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition
                    group-hover:bg-cyan-400
                  "
                >
                  View Gallery
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}