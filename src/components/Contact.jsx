import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden bg-[#060606]"
    >
      <div className="section-container relative">
        <Reveal>
          <div className="rounded-[2.5rem] border border-white/10 bg-[#0c0c0c] p-7 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
                  06 · Let&apos;s create
                </p>

                <h2 className="display-heading mt-6 max-w-5xl text-6xl leading-[0.88] text-white sm:text-7xl lg:text-8xl">
                  Let&apos;s make it
                  <br />

                  <span className="text-red-500">
                    YINGteresting.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                  Open to creative collaborations, digital marketing
                  opportunities, content projects, and community-focused ideas.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="contact-link"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5">
                    <Mail size={18} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/40">
                      Email
                    </span>

                    <span className="block truncate text-sm font-semibold text-white">
                      {profile.email}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-red-400"
                  />
                </a>

                <div className="contact-link">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5">
                    <MapPin size={18} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/40">
                      Based in
                    </span>

                    <span className="block text-sm font-semibold text-white">
                      {profile.location}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}