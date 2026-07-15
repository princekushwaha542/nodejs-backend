"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);


export function useScrollReveal(
  ref: React.RefObject<HTMLElement | null>
) {

  useGSAP(() => {

    if (!ref.current) return;


    gsap.from(ref.current, {

      y: 80,

      opacity: 0,

      duration: 1,

      ease: "power3.out",

      scrollTrigger: {

        trigger: ref.current,

        start: "top 85%",

        toggleActions:
          "play none none reverse",

      },

    });


  }, {
    scope: ref,
  });

}
