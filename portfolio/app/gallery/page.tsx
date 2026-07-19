"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#070B14] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
  <Link
    href="/"
    className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-5
      py-3
      text-white
      transition-all
      duration-300
      hover:border-cyan-400
      hover:bg-cyan-500/10
      hover:text-cyan-400
    "
  >
    <ArrowLeft size={18} />
    Back to Home
  </Link>
</div>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            📸 Gallery
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Every picture tells a story.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
           A collection of some memorable moments and photographs
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(index)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_20px_60px_rgba(34,211,238,.18)]
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  flex
                  h-64
                  items-center
                  justify-center
                  overflow-hidden
                  bg-black
                "
              >
                <Image
  src={item.image}
  alt={item.title}
  fill
  className="
    object-cover
    object-center
    transition-transform
    duration-700
    group-hover:scale-105
  "
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

             {/* Title */}

<div className="p-5">
  <h2
    className="
      text-lg
      font-semibold
      text-white
      transition-colors
      duration-300
      group-hover:text-cyan-400
    "
  >
    {item.title}
  </h2>
</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/90
              backdrop-blur-xl
              p-6
            "
          >
            {/* Close Button */}

            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-6
                top-6
                rounded-full
                bg-white/10
                p-3
                text-white
                transition
                hover:bg-white/20
              "
            >
              <X size={24} />
            </button>

            {/* Image */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                h-[85vh]
                w-[90vw]
                max-w-6xl
              "
            >
              <Image
                src={gallery[selectedImage].image}
                alt={gallery[selectedImage].title}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}