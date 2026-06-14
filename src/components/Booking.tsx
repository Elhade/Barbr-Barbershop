import { motion } from "framer-motion";
import { GoogleIcon, InstagramIcon } from "./icons/Brand";
import { BOOKING, BRAND } from "../data/site";

export function Booking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-orange px-6 py-24 text-center md:px-12"
    >
      {/* Oversized watermark */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.07, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[25vw] leading-none text-black"
      >
        {BOOKING.watermark}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-container"
      >
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-black/50">
          {BOOKING.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-none text-black">
          {BOOKING.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 tracking-wide text-black/70">{BOOKING.text}</p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-coal"
          >
            <InstagramIcon className="h-4 w-4" />
            {BOOKING.cta}
          </a>

          <a
            href={BRAND.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-black/30 pb-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-black/70 transition-colors hover:text-black"
          >
            <GoogleIcon className="h-4 w-4" />
            {BOOKING.googleCta}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
