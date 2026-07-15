import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl px-6 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}