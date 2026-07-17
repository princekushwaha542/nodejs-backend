"use client";

import { useEffect, useState } from "react";

const words = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "MERN Stack Developer",
  "Open Source Learner",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => {
            setDeleting(true);
          }, 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <div className="flex items-center justify-center lg:justify-start">
      <h2 className="text-xl font-semibold text-cyan-400 md:text-2xl">
        {text}
        <span className="ml-1 animate-pulse text-white">|</span>
      </h2>
    </div>
  );
}