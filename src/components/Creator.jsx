import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* =========================
   Social icons
========================= */

function TikTokIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.5 3v10.1a4.6 4.6 0 1 1-4-4.56"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.5 3c.45 2.7 2.05 4.3 4.5 4.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8 10v7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M8 7.2v.1"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M12 17v-4c0-1.7 1-3 2.7-3 1.8 0 2.8 1.2 2.8 3V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================
   Data
========================= */

const socialProfiles = [
  {
    id: 1,
    platform: "TikTok",
    label: "TikTok / Social",
    username: "@yingapsarachirawan12",
    description:
      "Educational · Creative · Technology · Community",
    url: "https://www.tiktok.com/@yingapsarachirawan12?_r=1&_t=ZS-97HNO5yKlgV",
    icon: TikTokIcon,
  },
  {
    id: 2,
    platform: "Instagram",
    label: "Instagram / Creative",
    username: "@yingapsarachirawan12",
    description:
      "Creative content · Lifestyle · Behind the scenes",

    // This is currently the TikTok link you provided.
    // Replace it later with the real Instagram link.
    url: "https://www.tiktok.com/@yingapsarachirawan12?_r=1&_t=ZS-97HNO5yKlgV",
    icon: InstagramIcon,
  },
  {
    id: 3,
    platform: "LinkedIn",
    label: "LinkedIn / Professional",
    username: "Ying An Reachny Saroeun",
    description:
      "Experience · Projects · Professional connections",
    url: "https://www.linkedin.com/in/ying-an-reachny-saroeun",
    icon: LinkedInIcon,
  },
];

const contentSkills = [
  "Content Strategy",
  "Short-form Video",
  "Storyboarding",
  "Script Writing",
  "Video Editing",
  "Social Media",
];

const creativeSteps = [
  {
    title: "Think",
    description:
      "Understanding the audience, platform, trend, and purpose behind every idea.",
  },
  {
    title: "Create",
    description:
      "Planning, storyboarding, writing, filming, designing, and editing content.",
  },
  {
    title: "Connect",
    description:
      "Publishing stories that encourage people to watch, engage, and participate.",
  },
];

/* =========================
   Component
========================= */

export default function Creator() {
  return (
    <section
      id="content"
      className="relative isolate overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background grid */}
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

      <div className="relative mx-auto max-w-375">
        {/* Heading */}
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <SectionHeading
                number="03"
                eyebrow="Content Creator"
                title={
                  <>
                    Made for
                    <br />
                    the feed.
                  </>
                }
              />
            </div>

            <div>
              <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                From the first idea to the final edit, I create digital
                content designed to educate, entertain, and connect
                with online communities.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {contentSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/55"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          {/* Creative statement */}
          <Reveal>
            <article className="relative h-full min-h-125 overflow-hidden rounded-4xl border border-white/10 bg-[#0b0b0b] p-7 sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 78% 30%, rgba(242,38,46,0.26), transparent 38%)",
                }}
              />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-[#f2262e]/35 bg-[#f2262e]/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff6268]">
                    Content in motion
                  </span>

                  <h3 className="mt-9 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                    Turning everyday ideas into stories people can{" "}
                    <span className="text-[#f2262e]">
                      feel, watch,
                    </span>{" "}
                    and remember.
                  </h3>
                </div>

                <div className="mt-16 grid gap-7 border-t border-white/10 pt-8 sm:grid-cols-3">
                  {creativeSteps.map((step) => (
                    <div key={step.title}>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#f2262e]">
                        {step.title}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-white/55">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {/* Social profiles */}
          <div className="grid gap-4">
            {socialProfiles.map((social, index) => {
              const SocialIcon = social.icon;

              return (
                <Reveal key={social.id} delay={index * 0.08}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.platform}`}
                    className="group relative flex min-h-37.5 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0b0b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f2262e]/50 hover:bg-[#101010]"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f2262e]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex w-full items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/65 transition duration-300 group-hover:border-[#f2262e]/40 group-hover:text-[#f2262e]">
                        <SocialIcon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                          {social.label}
                        </p>

                        <h3 className="mt-3 wrap-break-word text-lg font-bold tracking-tight text-white sm:text-xl">
                          {social.username}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm">
                          {social.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-white/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2262e]">
                        <ArrowIcon size={18} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}