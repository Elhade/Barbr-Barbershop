import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ABOUT } from "../data/site";

export function About() {
  return (
    <section id="about" className="bg-coal px-6 py-28 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Stacked images */}
          <Reveal className="relative mx-auto aspect-[16/9] w-full max-h-[300px] md:aspect-[9/16] md:max-h-[600px]">
            <img
              src={ABOUT.images.back}
              alt=""
              aria-hidden
              className="absolute h-full w-full object-cover brightness-50 saturate-50"
            />
            <img
              src={ABOUT.images.front}
              alt="Ambiance du salon BARB'R"
              loading="lazy"
              className="absolute h-full w-full translate-x-3 -translate-y-3 border-[3px] border-orange object-cover"
            />
          </Reveal>

          {/* Text */}
          <Reveal delay={0.1}>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-orange">
              {ABOUT.subtitle}
            </h3>
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="mb-6 text-[1.05rem] leading-relaxed text-white/75">
                {p}
              </p>
            ))}

            <blockquote className="mt-8 border-l-4 border-orange bg-orange/[0.07] p-6 font-display text-2xl uppercase leading-tight tracking-wide">
              {ABOUT.slogan.map((line) => (
                <span key={line} className="block">
                  {line.includes("FRAIS") ? (
                    <>
                      t'es <span className="text-orange">FRAIS !</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
