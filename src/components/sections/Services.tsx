"use client";

export default function Services() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl mb-4">Soluciones completas para tu empresa</h2>

        <p className="text-gray-400">
          No solo automatizamos cotizaciones. Digitalizamos tu operación.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <h3>Automatización con WhatsApp</h3>
          <p className="text-gray-400 text-sm">
            Sistema de cotización automatizado con IA.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <h3>Infraestructura de red</h3>
          <p className="text-gray-400 text-sm">
            Cableado, cámaras, APs y redes empresariales.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <h3>Software a medida</h3>
          <p className="text-gray-400 text-sm">
            Sistemas internos para automatizar procesos.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <h3>Desarrollo web</h3>
          <p className="text-gray-400 text-sm">
            Sitios diseñados para generar clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
