"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };

  }, []);


  return (
    <div
      ref={cursor}
      className="
      pointer-events-none
      fixed
      left-0
      top-0
      z-[9999]
      hidden
      h-6
      w-6
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-cyan-400
      md:block
      "
    />
  );
}