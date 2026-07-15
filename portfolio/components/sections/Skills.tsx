"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

import Container from "@/components/shared/Container";


const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Authentication",
    ],
  },

  {
    title: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "Mongoose",
      "Database Design",
    ],
  },

  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Netlify",
    ],
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="
      py-32
      "
    >

      <Container>

        <div className="mb-16 max-w-3xl">

          <p
            className="
            mb-4
            text-cyan-400
            "
          >
            Skills
          </p>


          <h2
            className="
            text-4xl
            font-bold
            sm:text-5xl
            "
          >
            Technologies I use
            to build products.
          </h2>


        </div>



        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          "
        >

          {skillGroups.map((group, index) => {

            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{
                  opacity:0,
                  y:40,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index * 0.1,
                }}
                className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                "
              >

                <Icon
                  size={35}
                  className="
                  mb-6
                  text-cyan-400
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  "
                />


                <h3
                  className="
                  mb-5
                  text-2xl
                  font-bold
                  "
                >
                  {group.title}
                </h3>


                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  "
                >

                  {group.skills.map((skill)=>(
                    <span
                      key={skill}
                      className="
                      rounded-full
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-2
                      text-sm
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-cyan-400
                      hover:text-cyan-400
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>


              </motion.div>
            );

          })}

        </div>


      </Container>

    </section>
  );
}