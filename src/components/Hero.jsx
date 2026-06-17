import { useEffect, useState } from "react";

const creativeFields = [
  "Digital Marketing",
  "Content Creation",
  "Creative Direction",
  "Storytelling",
  "Technology",
];

function ArrowDownRightIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DownloadIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3v11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m8 10 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 18v2h14v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4v15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m7 14 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHasLoaded(true);
    }, 60);

    return () => window.clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070707] text-white"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
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

      {/* Dark depth overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

      {/* Date */}
      <div
        className={`
          absolute right-6 top-28 z-40 hidden
          text-[11px] font-semibold uppercase tracking-[0.3em]
          text-white/50 transition-all duration-1000
          md:block lg:right-12
          ${
            hasLoaded
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }
        `}
      >
        June 2026
      </div>

      {/* Giant PORTFOLIO title */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] z-10 w-full -translate-x-1/2 text-center">
        <h1 className="hero-portfolio-title whitespace-nowrap font-black uppercase leading-[0.75] tracking-[-0.075em] text-[#f2262e]">
          <span className="text-[23vw] sm:text-[21vw] md:text-[18vw] lg:text-[16vw]">
            Portfolio
          </span>
        </h1>
      </div>

      {/* Portrait */}
      <div className="hero-portrait pointer-events-none absolute bottom-0 left-1/2 z-20 h-[71vh] w-full -translate-x-1/2 sm:h-[76vh] md:h-[84vh] lg:h-[90vh]">
        <img
          src="/assets/reachny-portrait.png"
          alt="Sareoun Reachny Ying An"
          className="hero-portrait-image mx-auto h-full w-full object-contain object-bottom drop-shadow-[0_28px_55px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Left introduction */}
      <div className="relative z-30 flex min-h-screen items-end px-6 pb-24 pt-44 md:items-center md:px-10 md:pb-0 md:pt-48 lg:px-12">
        <div className="hero-copy max-w-[550px]">
          <p className="max-w-[480px] text-[23px] font-light leading-[1.15] tracking-[-0.035em] text-white sm:text-[27px] md:text-[34px]">
            Step into the creative world of
          </p>

          <h2 className="text-shine mt-10 text-[82px] font-black uppercase leading-[0.82] tracking-[-0.075em] sm:text-[96px] md:mt-14 md:text-[118px] lg:text-[132px]">
            Ying
          </h2>

          <div className="mt-9 h-[2px] w-[74px] bg-[#f2262e]" />

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/65 md:text-[13px]">
            Sareoun Reachny Ying An
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("work")}
              className="
                group flex items-center gap-4
                rounded-2xl border border-[#f2262e]/70
                bg-[#f2262e]/10 px-6 py-4
                text-[11px] font-bold uppercase tracking-[0.16em]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#f2262e]
                hover:shadow-[0_18px_45px_rgba(242,38,46,0.25)]
                md:px-7
              "
            >
              Explore Work

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                <ArrowDownRightIcon />
              </span>
            </button>

            <a
              href="/assets/Reachny-Ying-An-CV.pdf"
              download
              className="
                group flex items-center gap-4
                rounded-2xl border border-white/15
                bg-white/[0.035] px-6 py-4
                text-[11px] font-bold uppercase tracking-[0.16em]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/35
                hover:bg-white/[0.08]
                hover:shadow-[0_18px_45px_rgba(255,255,255,0.06)]
                md:px-7
              "
            >
              Download CV

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                <DownloadIcon />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right-side creative fields */}
      <div className="absolute right-8 top-1/2 z-30 hidden -translate-y-[35%] lg:block xl:right-16">
        <div className="space-y-9">
          {creativeFields.map((field, index) => (
            <div
              key={field}
              className="hero-label group flex items-center gap-4"
              style={{
                animationDelay: `${0.7 + index * 0.11}s`,
              }}
            >
              <span className="floating-cross text-lg font-light text-[#f2262e]">
                +
              </span>

              <span className="h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#f2262e]" />

              <span className="min-w-[190px] text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors duration-300 group-hover:text-white">
                {field}
              </span>
            </div>
          ))}

          <div
            className="hero-label flex items-center gap-4 pt-3"
            style={{
              animationDelay: `${0.7 + creativeFields.length * 0.11}s`,
            }}
          >
            <span className="floating-cross text-lg font-light text-[#f2262e]">
              +
            </span>

            <span className="h-px w-8 bg-white/20" />

            <span className="min-w-[190px] text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">
              Phnom Penh, Cambodia
            </span>
          </div>
        </div>
      </div>

      {/* Mobile skill labels */}
      <div className="absolute bottom-5 left-6 right-6 z-30 hidden flex-wrap gap-2 sm:flex md:bottom-8 lg:hidden">
        {creativeFields.map((field) => (
          <span
            key={field}
            className="rounded-full border border-white/10 bg-black/45 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55"
          >
            {field}
          </span>
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="
          absolute bottom-8 right-8 z-40 hidden
          items-center gap-4
          text-[10px] font-medium uppercase tracking-[0.24em]
          text-white/50 transition-colors duration-300
          hover:text-white
          md:flex lg:right-12
        "
      >
        Scroll to discover

        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-[#f2262e] hover:text-[#f2262e]">
          <ArrowDownIcon />
        </span>
      </button>
    </section>
  );
}