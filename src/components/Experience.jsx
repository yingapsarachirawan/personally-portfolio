import { experience } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-[#090909]">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            number="05"
            eyebrow="Experience"
            title="Creative work across brands, education, and community."
            description="A concise timeline gives enough context without turning the portfolio into a second CV."
          />
        </Reveal>

        <div className="mt-14 border-t border-white/10">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 60}>
              <article className="experience-row grid gap-4 border-b border-white/10 py-7 md:grid-cols-[0.55fr_1fr_1fr] md:items-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{item.period}</p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.company}</h3>
                <p className="text-sm text-white/55 md:text-right">{item.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
