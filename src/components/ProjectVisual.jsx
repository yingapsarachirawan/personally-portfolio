export default function ProjectVisual({ project }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#090909]">
      {/* Soft background spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 42%,
              rgba(255,255,255,0.07),
              rgba(255,255,255,0.015) 35%,
              transparent 65%
            )
          `,
        }}
      />

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.2) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.2) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Logo container */}
      <div className="relative z-10 flex h-[72%] w-[82%] items-center justify-center rounded-[2rem]">
        <img
          src={project.image}
          alt={`${project.name} logo`}
          loading="lazy"
          className="max-h-full max-w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.05]"
          onError={(event) => {
            console.error("Failed to load:", project.image);
            event.currentTarget.style.opacity = "0.2";
          }}
        />
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

      {/* Soft hover lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(242,38,46,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}