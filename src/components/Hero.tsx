import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "../data/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: background drifts + zooms as the hero scrolls away.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[700px] items-center justify-center overflow-hidden text-center"
      style={{ height: "100vh" }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-cover bg-top brightness-[0.35]"
        style={{
          backgroundImage: `url('${HERO.bg}')`,
          y: bgY,
          scale: bgScale,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />

      <motion.div
        className="relative z-10 max-w-3xl px-6"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-6 text-xs uppercase tracking-[0.5em] text-orange"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(3.5rem,10vw,8rem)] uppercase leading-[0.9] tracking-tight"
        >
          BARB<span className="text-orange">'</span>R
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 text-sm uppercase tracking-[0.4em] text-white/60"
        >
          Barbershop
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 inline-block border-y border-orange/40 px-8 py-4 text-[clamp(0.9rem,2.5vw,1.3rem)] font-bold uppercase tracking-[0.2em] text-orange"
        >
          {HERO.slogan}
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <a
            href="#booking"
            className="inline-block bg-orange px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-light"
          >
            {HERO.cta}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Défiler vers le bas"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[0.6rem] uppercase tracking-[0.3em] text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
      >
        Scroll
        <ChevronDown className="h-5 w-5 animate-scroll-bounce" />
      </motion.a>
    </section>
  );
}
