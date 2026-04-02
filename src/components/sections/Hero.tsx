"use client";

import { contact } from "@/config/contact";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black text-center">
      <div className="max-w-4xl">
        <p className="text-green-400 text-sm mb-2">
          ⚡ Cotizaciones en menos de 2 minutos
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Deja de perder clientes por tardar en cotizar
        </h1>

        <p className="text-gray-400 text-lg mb-4">
          Genera cotizaciones profesionales desde WhatsApp sin esfuerzo manual.
        </p>

        <p className="text-red-400 text-sm mb-4">
          El cliente no espera. Elige al que responde primero.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contact.whatsappLink}
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            Empezar gratis en WhatsApp
          </a>

          <a
            href="#planes"
            className="border border-white/20 px-6 py-3 rounded-lg"
          >
            Ver planes
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Más de 100 técnicos ya cotizan más rápido
        </p>

        {/* DEMO VISUAL */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
          <p className="text-sm text-gray-400 mb-2">Ejemplo real:</p>
          <p>Servicio: Instalación CCTV</p>
          <p>Total: $4,500 MXN</p>
          <p className="text-green-400">PDF generado en 12 segundos</p>
        </div>
      </div>
    </section>
  );
}
