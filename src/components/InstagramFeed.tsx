import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { InstagramIcon } from "./icons/Brand";
import { BRAND, GALLERY, INSTAFEED, WIDGETS } from "../data/site";

/** Embeds the SnapWidget Instagram feed when configured. */
function SnapWidgetFeed({ src }: { src: string }) {
  return (
    <div className="mt-12 overflow-hidden">
      <iframe
        src={src}
        title="Feed Instagram BARB'R"
        className="h-[340px] w-full border-0 sm:h-[420px]"
        scrolling="no"
        loading="lazy"
        allowTransparency
      />
    </div>
  );
}

/** Static teaser grid + follow CTA shown until the feed widget is connected. */
function FeedFallback() {
  const preview = GALLERY.items.slice(0, 4);
  return (
    <div className="mt-12 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
      {preview.map((item, i) => (
        <motion.a
          key={item.src}
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="group relative aspect-square overflow-hidden bg-coal"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover saturate-[0.85] transition-all duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <InstagramIcon className="h-8 w-8 text-white" />
          </span>
        </motion.a>
      ))}
    </div>
  );
}

export function InstagramFeed() {
  return (
    <section id="insta" className="bg-ink px-6 py-28 md:px-12">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionHeading eyebrow={INSTAFEED.eyebrow} title={INSTAFEED.title} />
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                {INSTAFEED.text}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-light"
            >
              <InstagramIcon className="h-4 w-4" />
              {BRAND.instagramHandle}
            </a>
          </Reveal>
        </div>

        {WIDGETS.snapwidgetSrc ? (
          <SnapWidgetFeed src={WIDGETS.snapwidgetSrc} />
        ) : (
          <FeedFallback />
        )}
      </div>
    </section>
  );
}
