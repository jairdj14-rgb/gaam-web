export default function Pricing() {
  return (
    <section id="planes" className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl mb-4">Empieza gratis. Escala cuando crezcas.</h2>

      <p className="text-gray-400 mb-12">
        Diseñado para técnicos que quieren cotizar más rápido y mejor.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* FREE */}
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
          <h3 className="text-xl mb-4">Free</h3>
          <p className="text-gray-400">5 cotizaciones / mes</p>
          <p className="text-gray-400">PDF básico</p>
        </div>

        {/* BASIC */}
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
          <h3 className="text-xl mb-4">Basic</h3>
          <p>$500 / mes</p>
          <p className="text-gray-400">Más cotizaciones</p>
          <p className="text-gray-400">PDF mejorado</p>
        </div>

        {/* PRO */}
        <div className="p-8 rounded-2xl bg-white text-black scale-105">
          <h3 className="text-xl mb-4">Pro</h3>
          <p>$1,500+ / mes</p>
          <p>Cotizaciones ilimitadas</p>
          <p>Branding + logo</p>
          <p>IA para reportes</p>
        </div>
      </div>
    </section>
  );
}
