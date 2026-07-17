"use client";

import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      bg-black/40
      backdrop-blur-xl
      "
    >
      <div
        className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        items-center
        justify-between
        gap-8
        px-6
        py-10
        md:flex-row
        "
      >
        {/* Left */}

        <div className="text-center md:text-left">
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Prince Kushwaha
          </h2>

          <p
            className="
            mt-2
            text-slate-400
            "
          >
            Full Stack Developer
          </p>

          <p
            className="
            mt-1
            text-sm
            text-slate-500
            "
          >
            Building modern web experiences with
            React, Next.js & Node.js.
          </p>
        </div>

        {/* Center */}

        <div
          className="
          flex
          items-center
          gap-5
          "
        >
          <Link
            href="https://github.com/princekushwaha542"
            target="_blank"
            className="
            rounded-full
            border
            border-white/10
            p-3
            transition-all
            duration-300
            hover:border-cyan-400
            hover:text-cyan-400
            "
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/prince-kushwaha-692462301/"
            target="_blank"
            className="
            rounded-full
            border
            border-white/10
            p-3
            transition-all
            duration-300
            hover:border-cyan-400
            hover:text-cyan-400
            "
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href="https://instagram.com/theprince.exe16"
            target="_blank"
            className="
            rounded-full
            border
            border-white/10
            p-3
            transition-all
            duration-300
            hover:border-pink-500
            hover:text-pink-500
            "
          >
            <FaInstagram size={20} />
          </Link>
        </div>

        {/* Right */}

        <div
          className="
          text-center
          md:text-right
          "
        >
          <p
            className="
            flex
            items-center
            justify-center
            gap-2
            text-sm
            text-slate-400
            md:justify-end
            "
          >
            Made with
            <FaHeart className="text-red-500" />
            by Prince
          </p>

          <p
            className="
            mt-2
            text-xs
            text-slate-500
            "
          >
            © {new Date().getFullYear()} Prince Kushwaha.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}