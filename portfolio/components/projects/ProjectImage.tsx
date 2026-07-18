"use client";

import LaptopFrame from "./LaptopFrame";

interface Props {
  image: string;
  title: string;
  featured?: boolean;
}

export default function ProjectImage({
  image,
  title,
  featured = false,
}: Props) {
  return (
    <div className="relative">
      <LaptopFrame
        image={image}
        title={title}
      />

      {featured && (
        <span
          className="
            absolute
            left-5
            top-5
            z-10
            rounded-full
            bg-cyan-500
            px-4
            py-2
            text-xs
            font-semibold
            text-white
            shadow-xl
          "
        >
          ⭐ Featured
        </span>
      )}
    </div>
  );
}