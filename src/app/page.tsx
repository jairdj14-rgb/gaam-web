import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portafolio";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import CTA from "@/components/sections/CTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* EFECTO GLOBAL */}
      <CursorGlow />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* PORTAFOLIO */}
      <Portfolio />

      {/* TESTIMONIOS */}
      <Testimonials />

      {/* FORMULARIO */}
      <ContactForm />

      {/* CTA FINAL */}
      <CTA />

      {/* BOTÓN WHATSAPP */}
      <WhatsAppButton />
    </main>
  );
}
