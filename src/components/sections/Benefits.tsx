export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-black text-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-10">
        Lo que cambia cuando lo usas
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          Respondes en segundos, no en horas
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          Te ves como una empresa profesional
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          Aumentas tu tasa de cierre
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          Ahorras tiempo todos los días
        </div>
      </div>

      <p className="text-gray-500 mt-8">No es automatización. Es vender más.</p>
    </section>
  );
}
