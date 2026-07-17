"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Languages,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "BCA (Pursuing)",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Madhya Pradesh, India",
  },
  {
    icon: Briefcase,
    title: "Status",
    value: "Available for Internship",
  },
  {
    icon: Languages,
    title: "Languages",
    value: "Hindi • English",
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >
            <div
              className="
                mb-5
                inline-flex
                rounded-2xl
                bg-cyan-500/10
                p-3
                text-cyan-400
              "
            >
              <Icon size={26} />
            </div>

            <h3 className="text-xl font-semibold">
              {card.title}
            </h3>

            <p className="mt-3 text-slate-400">
              {card.value}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}