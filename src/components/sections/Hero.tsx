"use client";

import { contact } from "@/config/contact";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black text-center">
      <div className="max-w-4xl">
        <p className="text-red-500 font-medium mb-3">
          Pierdes clientes TODOS los días por no cotizar al momento
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Cotiza en 2 minutos desde WhatsApp y cierra más trabajos
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          Genera cotizaciones profesionales en PDF sin laptop, sin Excel y sin
          llegar a casa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contact.whatsappLink}
            target="_blank"
            className="bg-green-500 text-black px-8 py-4 rounded-lg font-medium hover:scale-105 transition"
          >
            Generar mi primera cotización
          </a>

          <a
            href="#planes"
            className="border border-white/20 px-8 py-4 rounded-lg"
          >
            Ver planes
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Gratis • Sin tarjeta • Empieza en menos de 2 minutos
        </p>
      </div>
    </section>
  );
}
