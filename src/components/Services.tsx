import { motion } from "framer-motion";
import { Phone, Navigation } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { BRAND, SERVICES } from "../data/site";

export function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-28 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow={SERVICES.eyebrow} title={SERVICES.title} />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden border border-white/10 bg-coal/60 p-7 transition-colors duration-300 hover:border-orange/60"
              >
                {/* Orange glow on hover */}
                <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <Icon
                  className="mb-5 h-9 w-9 text-orange transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl uppercase tracking-wide">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {service.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Tarifs -> on fait venir le client au salon */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-6 border border-orange/30 bg-orange/[0.06] px-6 py-10 text-center">
            <p className="max-w-xl text-lg font-medium text-white/85">{SERVICES.note}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center justify-center gap-3 bg-orange px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-light"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Appeler — {BRAND.phone}
              </a>
              <a
                href={BRAND.googleDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:border-orange hover:bg-orange/[0.08]"
              >
                <Navigation className="h-4 w-4" strokeWidth={2} />
                Venir au salon
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
