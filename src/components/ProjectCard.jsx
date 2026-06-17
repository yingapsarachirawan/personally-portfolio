import { useRef } from "react";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const rectangle = card.getBoundingClientRect();

    const mouseX = event.clientX - rectangle.left;
    const mouseY = event.clientY - rectangle.top;

    const centerX = rectangle.width / 2;
    const centerY = rectangle.height / 2;

    const rotateY = ((mouseX - centerX) / centerX) * 3.5;
    const rotateX = ((mouseY - centerY) / centerY) * -3.5;

    const glowX = (mouseX / rectangle.width) * 100;
    const glowY = (mouseY / rectangle.height) * 100;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
      `;

      card.style.setProperty("--glow-x", `${glowX}%`);
      card.style.setProperty("--glow-y", `${glowY}%`);
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;

    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "20%");
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        project-card-glow group relative
        flex h-full flex-col overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-[#101010]
        transition-[transform,box-shadow]
        duration-300 ease-out
        will-change-transform
        hover:shadow-[0_28px_80px_rgba(242,38,46,0.13)]
      "
      style={{
        "--glow-x": "50%",
        "--glow-y": "20%",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Cursor-following glow */}
      <div
        className="
          pointer-events-none absolute inset-0 z-30
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              430px circle at var(--glow-x) var(--glow-y),
              rgba(242,38,46,0.12),
              transparent 52%
            )
          `,
        }}
      />

      {/* Logo area */}
      <div
        className="relative aspect-[4/5] overflow-hidden bg-[#080808]"
        style={{
          transform: "translateZ(18px)",
        }}
      >
        <ProjectVisual project={project} />

        {/* Project number */}
        <span
          className="
            absolute left-5 top-5 z-20
            grid h-11 w-11 place-items-center
            rounded-full border border-white/10
            bg-black/55
            text-[10px] font-bold text-white/85
            backdrop-blur-sm
            transition-all duration-300
            group-hover:border-white/20
            group-hover:bg-black/70
          "
          style={{
            transform: "translateZ(30px)",
          }}
        >
          {project.number}
        </span>

        {/* Project title */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-7"
          style={{
            transform: "translateZ(34px)",
          }}
        >
          <h3 className="max-w-[290px] text-2xl font-black uppercase leading-[0.95] tracking-[-0.045em] text-white sm:text-3xl">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Information */}
      <div
        className="
          relative z-20 flex flex-1 flex-col
          border-t border-white/[0.07]
          bg-[#111111] p-6 sm:p-7
        "
        style={{
          transform: "translateZ(12px)",
        }}
      >
        <p className="text-[10px] font-bold uppercase leading-5 tracking-[0.17em] text-[#ff5960]">
          {project.role}
        </p>

        <p className="mt-5 text-sm leading-7 text-white/55">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full border border-white/10
                bg-white/[0.025]
                px-4 py-2
                text-[9px] font-semibold uppercase
                tracking-[0.13em] text-white/45
                transition-all duration-300
                group-hover:border-white/15
                group-hover:bg-white/[0.04]
                group-hover:text-white/65
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}