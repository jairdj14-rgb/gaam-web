export default function Pricing() {
  return (
    <section id="planes" className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl mb-4">Empieza gratis. Escala cuando crezcas.</h2>

      <p className="text-gray-400 mb-12">
        Diseñado para técnicos y empresas que quieren cotizar mejor.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
          <h3 className="text-xl mb-4">Free</h3>
          <p className="text-gray-400">5 cotizaciones / mes</p>
          <p className="text-gray-400">PDF básico</p>
          <p className="text-gray-400">Flujo automatizado</p>
        </div>

        <div className="p-8 rounded-2xl bg-white text-black scale-105">
          <h3 className="text-xl mb-4">Pro</h3>
          <p>Cotizaciones ilimitadas</p>
          <p>PDF profesional con branding</p>
          <p>Logo y personalización</p>
          <p>IA para reportes detallados</p>
        </div>
      </div>
    </section>
  );
}
