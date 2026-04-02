export default function Demo() {
  return (
    <section className="py-32 px-6 bg-black text-center">
      <h2 className="text-3xl md:text-5xl mb-16">
        Así se ve cuando el sistema trabaja por ti
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-left">
          <p className="text-gray-400 text-sm">Cliente:</p>
          <p>“¿Cuánto cuesta instalar cámaras?”</p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-left">
          <p className="text-gray-400 text-sm">Sistema:</p>
          <p className="text-green-400">Cotización generada automáticamente</p>
        </div>
      </div>
    </section>
  );
}
