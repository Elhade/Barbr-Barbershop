import { MapPin, Phone, Navigation } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { BRAND, CONTACT } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 py-28 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow={CONTACT.eyebrow} title={CONTACT.title} />

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Info column */}
          <Reveal>
            <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-orange">
              Adresse
            </h3>
            <p className="mt-3 leading-relaxed text-white/70">
              {BRAND.address.line1}
              <br />
              {BRAND.address.line2}
            </p>

            <h3 className="mt-8 text-[0.65rem] uppercase tracking-[0.3em] text-orange">
              Téléphone
            </h3>
            <a
              href={BRAND.phoneHref}
              className="mt-3 inline-flex items-center gap-3 bg-orange px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-light"
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
              Appeler — {BRAND.phone}
            </a>

            <h3 className="mt-8 text-[0.65rem] uppercase tracking-[0.3em] text-orange">
              Réseaux sociaux
            </h3>
            <div className="mt-3 flex flex-col gap-4">
              {CONTACT.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex max-w-[280px] items-center gap-4 border border-white/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-200 hover:border-orange hover:bg-orange/[0.08]"
                  >
                    <Icon className="h-5 w-5 text-white/80" />
                    {social.label}
                  </a>
                );
              })}
            </div>

            <h3 className="mt-8 text-[0.65rem] uppercase tracking-[0.3em] text-orange">
              Horaires
            </h3>
            <p className="mt-3 leading-relaxed text-white/70">
              {CONTACT.hours.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>

          {/* Map / location card — clickable to Google Maps directions */}
          <Reveal delay={0.1}>
            <a
              href={BRAND.googleDirections}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir l'itinéraire Google Maps"
              className="group relative block aspect-square overflow-hidden bg-coal"
            >
              <img
                src={CONTACT.mapImage}
                alt="Rue Chateauredon, Marseille"
                loading="lazy"
                className="h-full w-full object-cover brightness-50 saturate-50 transition-all duration-500 group-hover:scale-105 group-hover:brightness-[0.6]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40">
                <MapPin
                  className="h-12 w-12 text-orange drop-shadow-[0_0_20px_rgba(255,75,0,0.8)]"
                  strokeWidth={1.5}
                />
                <p className="text-center text-xs uppercase tracking-[0.25em] text-white/85">
                  {BRAND.address.line1}
                  <br />
                  {BRAND.address.line2}
                </p>
              </div>
              <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 bg-orange px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Navigation className="h-4 w-4" strokeWidth={2} />
                Itinéraire
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
