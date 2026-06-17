import { brands } from '../data/portfolio';

export default function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/2 py-6" aria-label="Brands and organisations">
      <div className="marquee-track flex min-w-max items-center gap-5">
        {loop.map((brand, index) => (
          <div key={`${brand}-${index}`} className="flex items-center gap-5">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-base">{brand}</span>
            <span className="text-red-500">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
