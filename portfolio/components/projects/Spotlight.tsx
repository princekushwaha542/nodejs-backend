"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

interface SpotlightProps {
  children: ReactNode;
}

export default function Spotlight({
  children,
}: SpotlightProps) {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[32px]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(34,211,238,.18),
              transparent 70%
            )
          `,
        }}
      />

      {children}
    </div>
  );
}