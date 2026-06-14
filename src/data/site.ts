import type { ComponentType } from "react";
import {
  Gamepad2,
  Trophy,
  Footprints,
  Scissors,
  Sparkles,
  Crown,
  Layers,
  PenLine,
  Baby,
  type LucideIcon,
} from "lucide-react";
import { InstagramIcon, SnapchatIcon } from "../components/icons/Brand";

/** Any icon component that accepts a className (Lucide or our brand SVGs). */
export type IconType = ComponentType<{ className?: string }>;

export const BRAND = {
  name: "BARB'R",
  tagline: "Barbershop",
  city: "Marseille — 13001",
  address: {
    line1: "1A Rue Chateauredon",
    line2: "13001 Marseille",
    postalCode: "13001",
    locality: "Marseille",
    full: "1A Rue Chateauredon, 13001 Marseille",
  },
  phone: "07 49 46 78 69",
  phoneHref: "tel:+33749467869",
  instagram: "https://instagram.com/barbr._13",
  instagramHandle: "@BARBR._13",
  snapchat: "https://www.snapchat.com/add/rd._26",
  snapchatHandle: "Rd._26",
  // Fiche Google + avis (lien partagé par le salon)
  googleProfile: "https://share.google/47snp4yuTrx0BC23k",
  // Itinéraire Google Maps vers le salon
  googleDirections:
    "https://www.google.com/maps/dir/?api=1&destination=BARB%27R%20Barbershop%2C%201A%20Rue%20Chateauredon%2C%2013001%20Marseille",
  year: 2026,
};

export const NAV_LINKS = [
  { label: "L'Espace", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Avis", href: "#avis" },
  { label: "Réserver", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "Marseille — 13001",
  slogan: "Tu Rentres · Tu Boudes · Tu Sors · T'es Frais",
  cta: "Prendre RDV",
  bg: "/images/frame_01.webp",
};

export const ABOUT = {
  eyebrow: "L'Espace",
  title: ["Un autre niveau", "de fraîcheur"],
  subtitle: "Notre histoire",
  paragraphs: [
    "BARB'R, c'est plus qu'un salon de coiffure. C'est un espace pensé pour que tu te sentes comme chez toi — en mieux. Niché au cœur du 1er arrondissement de Marseille, sur la Rue Chateauredon.",
    "Un intérieur blanc et orange soigné, des photos d'art au mur, un babyfoot, une PS5, et des barbiers qui savent exactement ce qu'ils font. Ici on ne fait pas semblant — on maîtrise.",
  ],
  slogan: ["Tu rentres,", "tu boudes,", "tu sors", "t'es FRAIS !"],
  images: {
    front: "/images/frame_12.webp",
    back: "/images/frame_16.webp",
  },
};

export const GALLERY = {
  eyebrow: "Galerie",
  title: ["L'ambiance", "en images"],
  intro:
    "Des détails qui font la différence. Un espace conçu avec soin, une identité visuelle forte, une culture qui se vit autant qu'elle se voit.",
  items: [
    { src: "/images/frame_05.webp", alt: "Intérieur salon", span: "tall" },
    { src: "/images/frame_08.webp", alt: "Basketball Nike bling" },
    { src: "/images/frame_11.webp", alt: "Adidas orange sneakers" },
    { src: "/images/frame_09.webp", alt: "Bac de lavage" },
    { src: "/images/frame_14.webp", alt: "Art mural noir et blanc", span: "wide" },
    { src: "/images/frame_22.webp", alt: "Sneakers display" },
  ] as GalleryItem[],
};

export type GalleryItem = {
  src: string;
  alt: string;
  span?: "tall" | "wide";
};

export const VIBE = {
  eyebrow: "Le Vibe",
  title: ["Plus qu'une coupe,", "une expérience"],
  cards: [
    {
      icon: Gamepad2,
      title: "PS5 en salle",
      desc: "L'attente ne l'est plus",
      img: "/images/frame_18.webp",
    },
    {
      icon: Trophy,
      title: "Babyfoot",
      desc: "Un vrai spot",
      img: "/images/frame_12.webp",
      objectPosition: "left",
    },
    {
      icon: Footprints,
      title: "Street culture",
      desc: "Chaque détail compte",
      img: "/images/frame_08.webp",
    },
    {
      icon: Scissors,
      title: "Matériel pro",
      desc: "Finitions haut de gamme",
      img: "/images/frame_09.webp",
    },
  ] as VibeCard[],
};

export type VibeCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
  objectPosition?: string;
};

export const BOOKING = {
  eyebrow: "Réservation",
  title: ["Prends ton", "rendez-vous"],
  text: "Disponible 7j/7 — Sur Instagram ou en direct au shop",
  cta: "@BARBR._13",
  googleCta: "Voir la fiche et les avis Google",
  watermark: "FRAIS",
};

export const CONTACT = {
  eyebrow: "Contact & Accès",
  title: ["Nous", "trouver"],
  hours: ["Mardi – Samedi : 10h – 20h", "Lundi & Dimanche : Sur RDV"],
  socials: [
    {
      icon: InstagramIcon as IconType,
      label: "Instagram — @Barbr._13",
      href: BRAND.instagram,
    },
    {
      icon: SnapchatIcon as IconType,
      label: "Snapchat — Rd._26",
      href: BRAND.snapchat,
    },
  ],
  mapImage: "/images/frame_03.webp",
};

export const SERVICES = {
  eyebrow: "Prestations",
  title: ["Ce qu'on", "fait"],
  note: "Tarifs communiqués au salon — passe nous voir ou appelle, on te dit tout.",
  items: [
    {
      icon: Scissors,
      name: "Coupe",
      desc: "Coupe sur-mesure, finitions nettes au détail.",
    },
    {
      icon: Sparkles,
      name: "Barbe",
      desc: "Taille, contours et serviette chaude.",
    },
    {
      icon: Crown,
      name: "Coupe + Barbe",
      desc: "Le combo complet, frais des deux côtés.",
    },
    {
      icon: Layers,
      name: "Dégradé / Fade",
      desc: "Transitions propres, du skin au flou parfait.",
    },
    {
      icon: PenLine,
      name: "Contours & Tracé",
      desc: "Lignes nettes et détails au rasoir.",
    },
    {
      icon: Baby,
      name: "Enfant",
      desc: "Coupe pour les plus jeunes, dans le calme.",
    },
  ] as ServiceItem[],
};

export type ServiceItem = {
  icon: LucideIcon;
  name: string;
  desc: string;
};

export const REVIEWS = {
  eyebrow: "Avis",
  title: ["Ils valident", "BARB'R"],
  fallbackText:
    "Note 5 étoiles sur Google. Rejoins les clients qui ressortent frais à chaque passage.",
  cta: "Lire tous les avis Google",
};

export const INSTAFEED = {
  eyebrow: "En ce moment",
  title: ["Suis le", "mouvement"],
  text: "Coupes, ambiance et nouveautés — tout passe sur Instagram.",
  cta: "Voir sur Instagram",
};

/**
 * Intégrations widgets tierces (gratuites).
 * Renseigne ces valeurs pour activer l'affichage en direct ;
 * sinon une version statique élégante s'affiche à la place.
 */
export const WIDGETS = {
  // 1. Crée un compte gratuit sur https://www.trustindex.io, connecte ta fiche
  //    Google, génère un widget puis colle ici l'URL du loader, ex :
  //    "https://cdn.trustindex.io/loader.js?xxxxxxxxxxxxxxxxxxxx"
  trustindexSrc: "",
  // 2. Crée un compte gratuit sur https://snapwidget.com, connecte Instagram,
  //    génère un widget puis colle ici l'URL d'embed, ex :
  //    "https://snapwidget.com/embed/1234567"
  snapwidgetSrc: "",
};
