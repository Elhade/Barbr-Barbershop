import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { GoogleIcon } from "./icons/Brand";
import { BRAND, REVIEWS, WIDGETS } from "../data/site";

/** Loads the Trustindex Google-reviews widget when an embed URL is configured. */
function TrustindexWidget({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, [src]);

  return <div ref={ref} className="mt-12" />;
}

/** Static, conversion-focused Google block shown until the widget is connected. */
function GoogleFallback() {
  return (
    <Reveal className="mt-12">
      <div className="flex flex-col items-center gap-6 border border-white/10 bg-coal/60 px-6 py-14 text-center">
        <GoogleIcon className="h-10 w-10 text-white/90" />
        <div className="flex gap-1.5 text-orange" aria-label="Note 5 étoiles">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-7 w-7 fill-orange" strokeWidth={0} />
          ))}
        </div>
        <p className="max-w-xl text-lg font-medium text-white/85">
          {REVIEWS.fallbackText}
        </p>
        <a
          href={BRAND.googleProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-orange px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-light"
        >
          <GoogleIcon className="h-4 w-4" />
          {REVIEWS.cta}
        </a>
      </div>
    </Reveal>
  );
}

export function Reviews() {
  return (
    <section id="avis" className="bg-coal px-6 py-28 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow={REVIEWS.eyebrow} title={REVIEWS.title} />
        {WIDGETS.trustindexSrc ? (
          <TrustindexWidget src={WIDGETS.trustindexSrc} />
        ) : (
          <GoogleFallback />
        )}
      </div>
    </section>
  );
}
