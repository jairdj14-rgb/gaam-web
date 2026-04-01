export default function Demo() {
  return (
    <section className="py-32 px-6 bg-black text-center">
      <h2 className="text-3xl md:text-5xl mb-16">
        Cotiza en minutos sin esfuerzo manual
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <h3>1. Técnico inicia</h3>
          <p className="text-gray-400 text-sm">
            Abre WhatsApp y comienza el flujo
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <h3>2. Responde preguntas</h3>
          <p className="text-gray-400 text-sm">
            Sistema guía el proceso automáticamente
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <h3>3. PDF listo</h3>
          <p className="text-gray-400 text-sm">
            Cotización profesional para enviar al cliente
          </p>
        </div>
      </div>
    </section>
  );
}
