import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-cyan-500
      px-7
      py-3
      font-medium
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-cyan-400
      "
    >
      {children}
    </Link>
  );
}