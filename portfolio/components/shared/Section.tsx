import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
      relative
      overflow-hidden
      py-20
      md:py-28
      lg:py-32
      ${className}
      `}
    >
      {children}
    </section>
  );
}