"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const button = useRef<HTMLAnchorElement>(null);


  const handleMouseMove = (
    e: React.MouseEvent
  ) => {

    const element = button.current;

    if (!element) return;


    const rect = element.getBoundingClientRect();


    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;


    gsap.to(element, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: "power3.out",
    });

  };


  const handleMouseLeave = () => {

    gsap.to(button.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.3)",
    });

  };


  return (
    <a
      ref={button}
      href={href}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-cyan-500
      px-8
      py-4
      font-medium
      text-white
      transition
      hover:bg-cyan-400
      "
    >
      {children}
    </a>
  );
}