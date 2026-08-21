import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Differentials } from "@/components/Differentials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Location } from "@/components/Location";
import { Rooms } from "@/components/Rooms";

export const App = () => (
  <>
    <a className="skip-link" href="#conteudo">
      Ir para o conteúdo
    </a>
    <Intro />
    <Header />
    <main id="conteudo">
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Amenities />
      <Differentials />
      <Booking />
      <Location />
      <FAQ />
      <FinalCTA />
      <Contact />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);
