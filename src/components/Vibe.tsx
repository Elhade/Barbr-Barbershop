import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { VIBE } from "../data/site";

export function Vibe() {
  return (
    <section id="vibe" className="bg-coal px-6 py-28 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow={VIBE.eyebrow} title={VIBE.title} />

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VIBE.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-[9/12] overflow-hidden bg-ink"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  style={{ objectPosition: card.objectPosition }}
                  className="h-full w-full object-cover brightness-[0.55] saturate-[0.7] transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 group-hover:saturate-100"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <Icon className="mb-2 h-7 w-7 text-orange" strokeWidth={1.5} />
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs tracking-wide text-muted">{card.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
