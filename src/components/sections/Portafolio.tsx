"use client";

import { useState } from "react";

const projects = [
  {
    title: "Automatización empresarial",
    short: "Optimización de procesos internos",
    full: {
      problem: "Procesos manuales que consumían tiempo y generaban errores.",
      solution:
        "Automatización de flujos internos con integraciones inteligentes.",
      result: "Reducción de tiempos operativos en un 60%.",
    },
  },
  {
    title: "Plataforma web de clientes",
    short: "Sistema de gestión digital",
    full: {
      problem: "Gestión manual de clientes y seguimiento ineficiente.",
      solution: "Desarrollo de plataforma centralizada con control total.",
      result: "Aumento en conversión y retención de clientes.",
    },
  },
  {
    title: "Infraestructura corporativa",
    short: "Red empresarial optimizada",
    full: {
      problem: "Red inestable y fallas constantes.",
      solution: "Implementación de red estructurada profesional.",
      result: "Operación continua sin interrupciones.",
    },
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="portafolio"
      className="relative py-32 px-6 bg-black bg-grid overflow-hidden"
    >
      <div className="absolute inset-0 data-flow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Casos reales
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Resultados obtenidos a través de sistemas implementados.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setActive(active === index ? null : index)}
              className="cursor-pointer group relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 bg-white/5 smooth
              hover:scale-[1.02] hover:border-white/30
              hover:shadow-[0_0_80px_rgba(255,255,255,0.12)]"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">{project.short}</p>

                {active === index && (
                  <div className="text-sm text-gray-300 space-y-2">
                    <p>
                      <span className="text-white">Problema:</span>{" "}
                      {project.full.problem}
                    </p>

                    <p>
                      <span className="text-white">Solución:</span>{" "}
                      {project.full.solution}
                    </p>

                    <p>
                      <span className="text-white">Resultado:</span>{" "}
                      {project.full.result}
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
