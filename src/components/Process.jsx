import { Clapperboard, Lightbulb, Megaphone, MousePointer2, Scissors, Target } from 'lucide-react';
import { process } from '../data/portfolio';
import Reveal from './Reveal';

const icons = [Target, Lightbulb, Clapperboard, MousePointer2, Scissors, Megaphone];

export default function Process() {
  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.015]">
      <div className="section-container">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1.65fr]">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-red-400">
                <span>04</span><span className="h-px w-10 bg-red-500" /><span>My process</span>
              </div>
              <h2 className="display-heading text-6xl leading-[0.86] text-white sm:text-7xl">
                How I<br />work
              </h2>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="absolute left-0 right-0 top-[39px] hidden h-px bg-gradient-to-r from-red-500/0 via-red-500/70 to-red-500/0 xl:block" />
              {process.map(([title, description], index) => {
                const Icon = icons[index];
                return (
                  <div key={title} className="glass-panel relative rounded-2xl p-5 pt-6">
                    <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-[#111] text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-white">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
