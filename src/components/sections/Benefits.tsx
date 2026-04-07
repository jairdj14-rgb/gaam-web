import { contact } from "@/config/contact";
export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-black text-center">
      <h2 className="text-3xl md:text-5xl mb-10">
        Lo que cambia cuando cotizas en el momento
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          Cierras más trabajos
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          Te ves profesional frente al cliente
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          No dependes de llegar a casa
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          Evitas perder oportunidades
        </div>
      </div>
    </section>
  );
}
