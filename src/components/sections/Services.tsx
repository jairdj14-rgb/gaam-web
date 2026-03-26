"use client";

export default function Services() {
  return (
    <section id="beneficios" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Cotiza más rápido y cierra más trabajos
        </h2>

        <p className="text-gray-400">
          Diseñado para técnicos y servicios que venden por WhatsApp.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <h3 className="mb-2 font-medium">Cotizaciones en segundos</h3>
          <p className="text-gray-400 text-sm">
            Genera PDFs profesionales automáticamente sin escribir todo manual.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <h3 className="mb-2 font-medium">Más profesional</h3>
          <p className="text-gray-400 text-sm">
            Envía cotizaciones bien presentadas que generan confianza.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <h3 className="mb-2 font-medium">Ahorra tiempo</h3>
          <p className="text-gray-400 text-sm">
            Cotiza más rápido y enfócate en cerrar trabajos.
          </p>
        </div>
      </div>
    </section>
  );
}
