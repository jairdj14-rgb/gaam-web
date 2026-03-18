"use client";

import { useState } from "react";

const services = [
  {
    title: "Sistemas de Automatización",
    short: "Optimización de procesos con IA.",
    full: "Automatizamos tareas, integraciones y flujos de trabajo para reducir costos y mejorar eficiencia.",
  },
  {
    title: "Plataformas Digitales",
    short: "Desarrollo web y apps.",
    full: "Creamos sistemas digitales modernos enfocados en rendimiento, conversión y escalabilidad.",
  },
  {
    title: "Crecimiento y Conversión",
    short: "Estrategia digital.",
    full: "Optimizamos adquisición de clientes, funnels y conversión con enfoque en resultados.",
  },
  {
    title: "Infraestructura Tecnológica",
    short: "Redes y sistemas.",
    full: "Implementación de redes, cableado estructurado y soluciones empresariales robustas.",
  },
  {
    title: "Operación y Soporte",
    short: "Continuidad operativa.",
    full: "Mantenimiento, monitoreo y soporte técnico continuo para evitar interrupciones.",
  },
  {
    title: "Estrategia y Dirección",
    short: "Acompañamiento estratégico.",
    full: "Te guiamos en decisiones clave para escalar tu negocio con sistemas eficientes.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      className="relative py-32 px-6 bg-black bg-grid overflow-hidden"
    >
      <div className="absolute inset-0 data-flow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Un sistema completo para tu crecimiento
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada módulo cumple una función dentro de tu sistema de negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setActive(active === index ? null : index)}
              className="cursor-pointer group relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 bg-white/5 smooth
              hover:scale-[1.02] hover:border-white/30
              hover:shadow-[0_0_80px_rgba(255,255,255,0.12)]"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>

                <p className="text-gray-400 text-sm mb-4">{service.short}</p>

                {active === index && (
                  <p className="text-gray-300 text-sm">{service.full}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
