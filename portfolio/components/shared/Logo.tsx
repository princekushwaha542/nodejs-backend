import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
      text-2xl
      font-bold
      tracking-tight
      bg-gradient-to-r
      from-cyan-400
      to-purple-500
      bg-clip-text
      text-transparent
      "
    >
      Prince.dev
    </Link>
  );
}