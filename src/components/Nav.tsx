import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "../data/site";

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display uppercase tracking-[0.25em] ${className}`}>
      BARB<span className="text-orange">'</span>R
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 md:px-12 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md"
          : "bg-gradient-to-b from-black/90 to-transparent"
      }`}
    >
      <a href="#top" className="text-2xl">
        <Logo />
      </a>

      {/* Desktop links */}
      <ul className="hidden gap-10 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile trigger */}
      <button
        type="button"
        aria-label="Ouvrir le menu"
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink/98 px-6 py-4 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo className="text-2xl" />
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <ul className="mt-16 flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl uppercase text-white transition-colors hover:text-orange"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <p className="mt-auto text-xs uppercase tracking-[0.2em] text-muted">
              {BRAND.address.line1} · {BRAND.address.line2}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
