"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import GitHubCard from "@/components/cards/GitHubCard";
import {
  githubProfile,
  repositories,
} from "@/data/github";

export default function GitHub() {
  return (
    <Section id="github">
      <Container>
        <SectionHeading
          subtitle="GitHub"
          title="Open Source & Projects"
          description="Some of my public repositories and open-source work."
        />

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-14
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <Image
                src={githubProfile.avatar}
                alt={githubProfile.name}
                width={90}
                height={90}
                className="rounded-full"
              />

              <div>
                <h2 className="text-3xl font-bold">
                  {githubProfile.name}
                </h2>

                <p className="mt-2 text-slate-400">
                  @{githubProfile.username}
                </p>

                <p className="mt-3 max-w-xl text-slate-400">
                  {githubProfile.description}
                </p>
              </div>
            </div>

            <a
              href={githubProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-cyan-500
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:bg-cyan-400
              "
            >
              View Profile
            </a>
          </div>
        </motion.div>

        {/* Repository Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <GitHubCard repo={repo} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}