"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/shared/ThemeToggle";


const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, []);



  return (

    <header
      className={`
      fixed
      top-0
      z-50
      w-full
      transition-all
      duration-500

      ${
        scrolled
        ?
        "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10"
        :
        "bg-transparent"
      }
      `}
    >

      <nav
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
        lg:px-10
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          tracking-tight
          "
        >

          Prince
          <span className="text-cyan-400">
            .
          </span>
          exe
        </a>



        {/* Desktop */}

        <div
          className="
          hidden
          items-center
          gap-8
          md:flex
          "
        >

          {
            links.map((link)=>(

              <a
                key={link.name}
                href={link.href}

                className="
                text-sm
                text-slate-300
                transition
                hover:text-cyan-400
                "
              >

                {link.name}

              </a>

            ))
          }


          <ThemeToggle />


        </div>




        {/* Mobile Button */}

        <button
          className="
          md:hidden
          "
          onClick={()=>setOpen(!open)}
          aria-label="menu"
        >

          {
            open
            ?
            <X />
            :
            <Menu />
          }

        </button>


      </nav>



      {/* Mobile Menu */}

      <AnimatePresence>

      {
        open && (

          <motion.div

            initial={{
              opacity:0,
              height:0,
            }}

            animate={{
              opacity:1,
              height:"auto",
            }}

            exit={{
              opacity:0,
              height:0,
            }}

            className="
            overflow-hidden
            border-t
            border-white/10
            bg-[#050816]/90
            backdrop-blur-xl
            md:hidden
            "

          >

            <div
              className="
              flex
              flex-col
              gap-6
              p-8
              "
            >

              {
                links.map((link)=>(

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={()=>setOpen(false)}

                    className="
                    text-slate-300
                    hover:text-cyan-400
                    "
                  >
                    {link.name}

                  </a>

                ))
              }


              <ThemeToggle />

            </div>


          </motion.div>

        )
      }

      </AnimatePresence>


    </header>

  );
}