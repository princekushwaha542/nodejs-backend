"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";


const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "MERN",
    label: "Full Stack",
  },
];


export default function About() {

  const section = useRef<HTMLDivElement>(null);

  useScrollReveal(section);


  return (
    <section
      ref={section}
      id="about"
      className="
      py-32
      "
    >

      <Container>

        <div className="
          grid
          gap-16
          lg:grid-cols-2
        ">


          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <p
              className="
              mb-4
              text-cyan-400
              "
            >
              About Me
            </p>


            <h2
              className="
              text-4xl
              font-bold
              leading-tight
              sm:text-5xl
              "
            >
              Building digital
              experiences with
              modern technology.
            </h2>


            <p
              className="
              mt-6
              text-lg
              text-slate-400
              "
            >
              I'm Prince Kushwaha, a Full Stack Developer
              focused on creating fast, scalable and
              beautiful web applications.

              <br />
              <br />

              I love turning ideas into interactive
              products using React, Next.js, Node.js
              and MongoDB.
            </p>


          </motion.div>



          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
              delay: 0.2,
            }}

            className="
            grid
            gap-6
            sm:grid-cols-3
            lg:grid-cols-1
            "
          >

            {stats.map((item, index) => (

              <motion.div
                key={item.label}

                initial={{
                  opacity:0,
                  y:30,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  delay:index * 0.15,
                }}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
                "
              >

                <h3
                  className="
                  text-4xl
                  font-bold
                  text-white
                  "
                >
                  {item.value}
                </h3>


                <p
                  className="
                  mt-2
                  text-slate-400
                  "
                >
                  {item.label}
                </p>


              </motion.div>

            ))}


          </motion.div>


        </div>


      </Container>


    </section>
  );
}