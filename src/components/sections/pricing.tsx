import { contact } from "@/config/contact";

export default function Pricing() {
  return (
    <section id="planes" className="py-32 px-6 text-center bg-black">
      <p className="text-green-400 text-sm mb-2">Empieza gratis. Sin riesgo.</p>

      <h2 className="text-4xl mb-4">
        Escala cuando empieces a cerrar más trabajos
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {/* FREE */}
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
          <h3>Free</h3>
          <p className="text-3xl">$0</p>
          <p className="text-gray-400">5 cotizaciones</p>

          <a href={contact.whatsappLink} className="underline">
            Probar gratis
          </a>
        </div>

        {/* BASIC */}
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
          <h3>Basic</h3>
          <p className="text-3xl">$299 MXN</p>

          <a href={contact.whatsappLink} className="underline">
            Empezar
          </a>
        </div>

        {/* PRO */}
        <div className="p-8 bg-white text-black rounded-2xl scale-105 border-4 border-green-400 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-green-400 px-3 py-1 rounded-full">
            MÁS USADO
          </span>

          <h3>PRO</h3>
          <p className="text-3xl">$999 MXN</p>

          <a href={contact.whatsappLink} className="font-semibold underline">
            Escalar mi negocio
          </a>
        </div>
      </div>
    </section>
  );
}
