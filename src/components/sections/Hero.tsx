"use client";

import { contact } from "@/config/contact";
import Parallax from "@/components/ui/Parallax";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black bg-grid">
      <div className="absolute inset-0 data-flow pointer-events-none" />

      <Parallax>
        <div
          className="relative max-w-4xl w-full p-10 md:p-14 rounded-3xl 
          bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-[0_0_80px_rgba(255,255,255,0.05)]
          hover:shadow-[0_0_120px_rgba(255,255,255,0.08)]
          transition transform-gpu smooth"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Crea cotizaciones profesionales desde WhatsApp en menos de 1 minuto
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
            Escribe "hola", responde unas preguntas y recibe un PDF listo para
            enviar a tu cliente.
          </p>

          <p className="text-gray-500 mb-10 max-w-xl">
            Ideal para plomeros, electricistas y técnicos que quieren cotizar
            rápido y verse más profesionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={contact.whatsappLink}
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 smooth"
            >
              Probar gratis ahora
            </a>

            <a
              href="#como-funciona"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 smooth"
            >
              Ver cómo funciona
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            5 cotizaciones gratis al mes • Sin tarjeta
          </p>
        </div>
      </Parallax>
    </section>
  );
}
