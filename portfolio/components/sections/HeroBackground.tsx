export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div
        className="
        absolute
        left-1/2
        top-1/3
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        right-0
        top-0
        h-[400px]
        w-[400px]
        rounded-full
        bg-purple-500/20
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
      />

    </div>
  );
}