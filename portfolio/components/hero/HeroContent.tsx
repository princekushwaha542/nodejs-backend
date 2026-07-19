"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import TypingText from "./TypingText";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          inline-flex
          items-center
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
        🚀 Available for Internship
      </motion.div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
          Prince Kushwaha
        </span>
      </h1>

      {/* Typing Animation */}

      <div className="mt-6">
        <TypingText />
      </div>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        I'm a passionate Full Stack Developer from Madhya Pradesh, India.
        I build modern, fast and responsive web applications using React,
        Next.js, Node.js, Express.js and MongoDB with beautiful UI and
        smooth user experiences.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        {/* Resume */}

        <a
          href="/Prince_Kushwaha_Resume.PDF"
          download
          className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-cyan-500
            px-7
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-400
          "
        >
          <Download size={20} />
          Download Resume
        </a>

        {/* Contact */}

        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-7
            py-4
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400
            hover:text-cyan-400
          "
        >
          Contact Me
          <ArrowRight size={20} />
        </a>
      </div>

      {/* Stats */}

      <HeroStats />
    </motion.div>
  );
}