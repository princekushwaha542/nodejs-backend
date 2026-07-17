"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    color: "#61DAFB",
    top: "8%",
    left: "8%",
    delay: 0,
  },
  {
    Icon: SiNextdotjs,
    color: "#ffffff",
    top: "18%",
    right: "10%",
    delay: 0.4,
  },
  {
    Icon: FaNodeJs,
    color: "#3C873A",
    top: "65%",
    left: "5%",
    delay: 0.8,
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    top: "70%",
    right: "8%",
    delay: 1.2,
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    top: "35%",
    left: "2%",
    delay: 1.6,
  },
  {
    Icon: SiTailwindcss,
    color: "#38BDF8",
    top: "45%",
    right: "3%",
    delay: 2,
  },
  {
    Icon: FaGithub,
    color: "#ffffff",
    bottom: "8%",
    left: "45%",
    delay: 2.4,
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, color, delay, ...position }, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 0.9,
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay,
            },
            scale: {
              duration: 0.8,
              delay,
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            },
          }}
          className="
            absolute
            z-10
            rounded-full
            border
            border-white/10
            bg-white/5
            p-4
            shadow-xl
            backdrop-blur-xl
          "
          style={position}
        >
          <Icon
            size={30}
            style={{
              color,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}