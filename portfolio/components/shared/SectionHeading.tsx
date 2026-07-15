interface Props {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mb-14 max-w-3xl">
      <p
        className="
        mb-3
        text-xs
        font-semibold
        uppercase
        tracking-[0.35em]
        text-cyan-400
        "
      >
        {subtitle}
      </p>

      <h2
        className="
        text-3xl
        font-bold
        leading-tight
        tracking-tight
        sm:text-4xl
        lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-5
          text-base
          leading-8
          text-slate-400
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}