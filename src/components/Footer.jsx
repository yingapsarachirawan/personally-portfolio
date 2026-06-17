import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#060606] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-375 flex-col gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.shortName}
        </span>

        <div className="flex flex-wrap gap-5">
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            Instagram
          </a>

          <a
            href={profile.tiktokUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            TikTok
          </a>

          <a
            href="#top"
            className="transition-colors duration-200 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}