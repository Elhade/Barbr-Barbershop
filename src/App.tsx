import { useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Vibe } from "./components/Vibe";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";

export default function App() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Gallery onOpen={setLightbox} />
        <Vibe />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
