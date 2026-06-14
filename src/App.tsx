import { useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Vibe } from "./components/Vibe";
import { Reviews } from "./components/Reviews";
import { Booking } from "./components/Booking";
import { InstagramFeed } from "./components/InstagramFeed";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";
import { StickyCTA } from "./components/StickyCTA";

export default function App() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery onOpen={setLightbox} />
        <Vibe />
        <Reviews />
        <Booking />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
      <StickyCTA />
    </>
  );
}
