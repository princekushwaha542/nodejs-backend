"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { gallery } from "@/data/gallery";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = () => {
    if (selected === null) return;
    setSelected((selected + 1) % gallery.length);
  };

  const prevImage = () => {
    if (selected === null) return;
    setSelected((selected - 1 + gallery.length) % gallery.length);
  };

  return (
    <Section
      id="gallery"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <Container>

        <SectionHeading
          subtitle="Gallery"
          title="Moments & Memories"
          description="A glimpse of my journey, workspace, achievements and coding life."
        />

        {/* Gallery Grid */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
              onClick={() => setSelected(index)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-white/10
              "
            >

              <div className="relative aspect-[4/5]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-5 left-5 translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

      {/* Modal */}

      <AnimatePresence>

        {selected !== null && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/90
              backdrop-blur-md
            "
          >

            {/* Close */}

            <button
              onClick={() => setSelected(null)}
              className="absolute right-8 top-8"
            >
              <X size={32} />
            </button>

            {/* Previous */}

            <button
              onClick={prevImage}
              className="absolute left-8"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}

            <motion.div
              initial={{
                scale: .9,
              }}
              animate={{
                scale: 1,
              }}
              className="
                relative
                h-[80vh]
                w-[90vw]
                max-w-5xl
              "
            >

              <Image
                src={gallery[selected].image}
                alt={gallery[selected].title}
                fill
                className="object-contain"
              />

            </motion.div>

            {/* Next */}

            <button
              onClick={nextImage}
              className="absolute right-8"
            >
              <ChevronRight size={40} />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </Section>
  );
}