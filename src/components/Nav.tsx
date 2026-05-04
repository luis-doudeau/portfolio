import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#timeline", label: "Parcours" },
  { href: "#vision", label: "Ambitions" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const hrefFor = (h: string) => (onHome ? h : `/${h}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-paper/80 backdrop-blur-md border border-ink/10 rounded-full py-2.5 px-3 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
            : ""
        }`}
      >
        <a href={onHome ? "#top" : "/"} className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="size-7 rounded-full bg-ink text-paper grid place-items-center text-[11px] font-bold">
            LD
          </span>
          <span className="hidden sm:inline font-semibold">luis-doudeau</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={hrefFor(l.href)}
              className="px-3 py-1.5 rounded-full hover:bg-ink/5 transition-colors text-ink/80 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={hrefFor("#contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-4 py-2 rounded-full hover:bg-accent transition-colors"
          >
            Me contacter
            <span className="size-1.5 rounded-full bg-accent group-hover:bg-paper" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden size-9 grid place-items-center rounded-full border border-ink/15"
          >
            <span className="block w-4 h-px bg-ink relative before:content-[''] before:absolute before:inset-x-0 before:-top-1.5 before:h-px before:bg-ink after:content-[''] after:absolute after:inset-x-0 after:top-1.5 after:h-px after:bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-5 mt-2 rounded-2xl border border-ink/10 bg-paper p-3 shadow-lg"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={hrefFor(l.href)}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-ink/5 text-ink/80"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
