"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span
        className="
          inline-flex
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-cyan-400
        "
      >
        About Me
      </span>

      <h2 className="mt-6 text-4xl font-bold md:text-5xl">
        Passionate Full Stack Developer
      </h2>

      <p className="mt-6 leading-8 text-slate-400">
        I'm <strong>Prince Kushwaha</strong>, a Full Stack Developer
        from Madhya Pradesh, India. I enjoy building modern,
        responsive and scalable web applications using React,
        Next.js, Node.js, Express.js and MongoDB.
      </p>

      <p className="mt-5 leading-8 text-slate-400">
        Currently pursuing BCA while continuously improving my
        development skills through real-world projects and
        hands-on practice.
      </p>

      <p className="mt-5 leading-8 text-slate-400">
        My goal is to become a professional software engineer
        and contribute to products that impact millions of users.
      </p>
    </motion.div>
  );
}