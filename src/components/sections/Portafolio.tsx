"use client";

import { useState } from "react";

const cases = [
  {
    title: "Plomero independiente",
    short: "Cotizaciones más rápidas y profesionales",
    full: {
      problem:
        "Perdía tiempo escribiendo cotizaciones manualmente y respondía tarde a clientes.",
      solution:
        "Implementó el cotizador automático por WhatsApp para generar PDFs en segundos.",
      result:
        "Ahora responde más rápido, se ve más profesional y cierra más trabajos.",
    },
  },
  {
    title: "Técnico en aire acondicionado",
    short: "Mejor seguimiento de clientes",
    full: {
      problem:
        "Clientes pedían precios pero no recibían respuesta clara o rápida.",
      solution:
        "Usa el sistema para generar cotizaciones estructuradas al instante.",
      result:
        "Aumentó su tasa de cierre al enviar cotizaciones claras y rápidas.",
    },
  },
  {
    title: "Electricista",
    short: "Más orden y menos esfuerzo",
    full: {
      problem:
        "Cotizaciones desordenadas por mensaje y dificultad para mantener consistencia.",
      solution: "Automatizó su proceso de cotización desde WhatsApp.",
      result:
        "Ahorra tiempo y proyecta una imagen más profesional ante sus clientes.",
    },
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="casos"
      className="relative py-32 px-6 bg-black bg-grid overflow-hidden"
    >
      <div className="absolute inset-0 data-flow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Casos reales de uso
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Técnicos que ya están cotizando más rápido y cerrando más trabajos.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setActive(active === index ? null : index)}
              className="cursor-pointer group relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 bg-white/5 smooth
              hover:scale-[1.02] hover:border-white/30
              hover:shadow-[0_0_80px_rgba(255,255,255,0.12)]"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>

                <p className="text-gray-400 text-sm mb-4">{item.short}</p>

                {active === index && (
                  <div className="text-sm text-gray-300 space-y-2">
                    <p>
                      <span className="text-white">Problema:</span>{" "}
                      {item.full.problem}
                    </p>

                    <p>
                      <span className="text-white">Solución:</span>{" "}
                      {item.full.solution}
                    </p>

                    <p>
                      <span className="text-white">Resultado:</span>{" "}
                      {item.full.result}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
