"use client";

import { contact } from "@/config/contact";
import Parallax from "@/components/ui/Parallax";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black bg-grid">
      <Parallax>
        <div
          className="max-w-5xl w-full p-10 md:p-16 rounded-3xl 
        bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Cotiza en automático desde WhatsApp con IA y cierra más clientes
          </h1>

          <p className="text-gray-400 text-lg mb-4">
            Implementa un sistema que genera cotizaciones profesionales en
            minutos sin esfuerzo manual.
          </p>

          <p className="text-gray-500 mb-8">
            Flujo inteligente de preguntas + PDFs con branding + reportes con
            IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={contact.whatsappLink}
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium"
            >
              Probar gratis
            </a>

            <a
              href="#planes"
              className="border border-white/20 px-6 py-3 rounded-lg"
            >
              Ver planes
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Sin tarjeta • 5 cotizaciones gratis
          </p>
        </div>
      </Parallax>
    </section>
  );
}
