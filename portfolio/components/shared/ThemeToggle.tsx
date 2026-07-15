"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
      h-11
      w-11
      rounded-full
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-300
      hover:scale-110
      hover:border-cyan-400
      flex
      items-center
      justify-center
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}