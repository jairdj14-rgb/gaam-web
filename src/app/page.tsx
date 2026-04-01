import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Demo from "@/components/sections/Demo";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Portfolio from "@/components/sections/Portafolio";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import CTA from "@/components/sections/CTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <CursorGlow />
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* DEMO (NUEVO) */}
      <Demo />

      {/* SERVICIOS (B2B + PRODUCTO) */}
      <Services />

      {/* PLANES (CLAVE $$$) */}
      <Pricing />

      {/* CASOS */}
      <Portfolio />

      {/* TESTIMONIOS */}
      <Testimonials />

      {/* CTA */}
      <CTA />

      {/* CONTACTO */}
      <ContactForm />

      <WhatsAppButton />
    </main>
  );
}
