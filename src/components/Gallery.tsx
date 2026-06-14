import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GALLERY } from "../data/site";

type GalleryProps = {
  onOpen: (src: string) => void;
};

const spanClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
};

export function Gallery({ onOpen }: GalleryProps) {
  return (
    <section id="gallery" className="bg-ink px-6 py-28 md:px-12">
      <div className="mx-auto max-w-container">
        <div className="max-w-xl">
          <SectionHeading eyebrow={GALLERY.eyebrow} title={GALLERY.title} />
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm leading-relaxed text-muted">{GALLERY.intro}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-1.5 sm:auto-rows-[260px] md:grid-cols-3">
          {GALLERY.items.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => onOpen(item.src)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative cursor-pointer overflow-hidden bg-coal ${
                item.span ? spanClass[item.span] : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover saturate-[0.85] transition-all duration-500 group-hover:scale-105 group-hover:saturate-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
