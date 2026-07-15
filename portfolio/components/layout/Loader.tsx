"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".loader-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(".loader-text", {
        opacity: 0,
        y: -30,
        duration: 0.5,
        delay: 0.5,
      })
      .to(loader.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div
      ref={loader}
      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-[#050816]
      "
    >
      <h1
        className="
        loader-text
        translate-y-10
        text-4xl
        font-bold
        text-white
        opacity-0
        "
      >
        Prince.dev
      </h1>
    </div>
  );
}