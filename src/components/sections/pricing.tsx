import { contact } from "@/config/contact";

export default function Pricing() {
  return (
    <section id="planes" className="py-32 px-6 text-center bg-black">
      <p className="text-green-400 mb-2">Pensado para técnicos en campo</p>

      <h2 className="text-4xl mb-12">
        Empieza gratis. Escala cuando cierres más trabajos
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
          <h3>Free</h3>
          <p>$0</p>
          <p className="text-gray-400">5 cotizaciones</p>
          <a href={contact.whatsappLink}>Probar en obra</a>
        </div>

        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
          <h3>Basic</h3>
          <p>$299 MXN</p>
          <a href={contact.whatsappLink}>Uso diario</a>
        </div>

        <div className="p-8 bg-white text-black rounded-2xl scale-105 border-4 border-green-400">
          <h3>PRO</h3>
          <p>$999 MXN</p>
          <a href={contact.whatsappLink}>Escalar mi negocio</a>
        </div>
      </div>
    </section>
  );
}
