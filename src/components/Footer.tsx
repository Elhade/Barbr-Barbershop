import { BRAND } from "../data/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 bg-coal px-6 py-12 md:px-12">
      <div className="font-display text-xl uppercase tracking-[0.25em]">
        BARB<span className="text-orange">'</span>R{" "}
        <span className="align-middle text-[0.55rem] font-normal tracking-[0.2em] text-white/50">
          BARBERSHOP
        </span>
      </div>
      <p className="text-[0.7rem] uppercase tracking-[0.15em] text-muted">
        {BRAND.address.line1} · {BRAND.address.line2}
      </p>
      <p className="text-[0.7rem] uppercase tracking-[0.15em] text-muted">
        <a href={BRAND.instagram} className="text-orange">
          {BRAND.instagramHandle}
        </a>{" "}
        · © {BRAND.year}
      </p>
    </footer>
  );
}
