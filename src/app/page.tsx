import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Demo from "@/components/sections/demo";
import Benefits from "@/components/sections/Benefits";
import Pricing from "@/components/sections/pricing";
import Portfolio from "@/components/sections/Portafolio";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <CursorGlow />
      <Navbar />

      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Benefits />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Services />
      <CTA />
      <FAQ />
      <ContactForm />

      <WhatsAppButton />
    </main>
  );
}
