export default function Demo() {
  return (
    <section className="py-32 px-6 bg-black text-center">
      <h2 className="text-3xl md:text-5xl mb-16">
        De mensaje a cotización profesional en segundos
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <h3 className="mb-2 text-lg">1. Cliente escribe</h3>
          <p className="text-gray-400 text-sm">
            Inicia conversación en WhatsApp
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <h3 className="mb-2 text-lg">2. Flujo inteligente</h3>
          <p className="text-gray-400 text-sm">
            Sistema hace preguntas clave automáticamente
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <h3 className="mb-2 text-lg">3. PDF listo</h3>
          <p className="text-gray-400 text-sm">
            Cotización lista para enviar con branding
          </p>
        </div>
      </div>
    </section>
  );
}
