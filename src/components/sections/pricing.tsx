import { contact } from "@/config/contact";

export default function Pricing() {
  return (
    <section id="planes" className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl mb-12">
        Empieza gratis. Escala cuando cierres más trabajos
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* FREE */}
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
          <h3 className="text-xl mb-2">FREE</h3>
          <p className="text-3xl mb-4">$0</p>
          <p className="text-gray-400 mb-6">3 cotizaciones</p>
          <p className="text-sm mb-6">Refiere compañeros y gana cotizaciones</p>

          <a
            href={contact.whatsappLink}
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            Empezar gratis
          </a>
        </div>

        {/* PRO */}
        <div className="p-8 bg-white text-black rounded-2xl scale-105">
          <h3 className="text-xl mb-2">PRO</h3>
          <p className="text-3xl mb-4">$144 MXN / mes</p>

          <p className="mb-2">Cotizaciones ilimitadas</p>
          <p className="text-sm mb-6">Cancela cuando quieras</p>

          <a
            href={contact.whatsappLink}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Activar PRO
          </a>
        </div>
      </div>
    </section>
  );
}
