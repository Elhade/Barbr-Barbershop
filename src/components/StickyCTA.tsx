import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { InstagramIcon } from "./icons/Brand";
import { BRAND } from "../data/site";

/**
 * Mobile-only sticky action bar. Appears once the user scrolls past the hero,
 * keeping "Appeler" and "Réserver" always one thumb away — the conversion hook.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-ink/95 backdrop-blur-md md:hidden"
        >
          <a
            href={BRAND.phoneHref}
            className="flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            Appeler
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange py-4 text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            <InstagramIcon className="h-4 w-4" />
            Réserver
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
