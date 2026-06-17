import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Content', '#content'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'px-3 pt-3' : ''}`}>
      <nav
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 transition-all sm:px-8 ${
          scrolled ? 'glass-panel rounded-2xl border-white/10' : ''
        }`}
        aria-label="Main navigation"
      >
        <a href="#top" className="text-xs font-bold uppercase tracking-[0.22em] text-white">
          Personal Portfolio
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 top-0 z-[-1] grid place-items-center bg-black/95 px-6 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col items-center gap-7 pt-16">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                className="display-heading text-5xl text-white transition hover:text-red-400"
                onClick={() => setOpen(false)}
              >
                <span className="mr-3 text-xs font-medium text-red-400">0{index + 1}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
