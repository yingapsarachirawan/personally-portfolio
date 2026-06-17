export default function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-red-400">
          <span>{number}</span>
          <span className="h-px w-10 bg-red-500" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="display-heading max-w-3xl text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-white/60 lg:justify-self-end lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
