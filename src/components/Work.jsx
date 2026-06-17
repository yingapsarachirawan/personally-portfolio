import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section
      id="work"
      className="relative isolate overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#f2262e]">
                02 · Selected Work
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.86] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[100px]">
                Work that
                <br />
                speaks.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              A selection of digital marketing, content creation,
              education, and community projects I have contributed to.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}