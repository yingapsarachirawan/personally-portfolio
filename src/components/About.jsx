import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-red-500/10 blur-[140px]" />
      <div className="section-container">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="border-b border-white/10 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-16">
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-red-400">
                <span>01</span><span className="h-px w-10 bg-red-500" /><span>About me</span>
              </div>
              <h2 className="display-heading text-6xl leading-[0.86] text-white sm:text-7xl lg:text-8xl">
                About<br />me
              </h2>
              <a href="#contact" className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition hover:text-white">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-red-500/70 text-red-400">
                  <ArrowUpRight size={18} />
                </span>
                Let&apos;s connect
              </a>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="max-w-4xl text-4xl font-medium leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                I blend creativity, marketing, and technology to build <span className="text-red-400">impact.</span>
              </h3>
              <div className="mt-9 grid gap-6 text-base leading-7 text-white/60 md:grid-cols-2">
                <p>
                  I&apos;m a digital marketer, content creator, and software engineering student who loves turning ideas into meaningful digital experiences.
                </p>
                <p>
                  From strategy to storytelling, and from content planning to creative production, I enjoy making work that feels clear, useful, and human.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
