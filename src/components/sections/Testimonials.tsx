import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Carlos Mendoza",
    text: "Automatizamos procesos internos y mejoramos la eficiencia operativa en semanas.",
  },
  {
    name: "Andrea Ruiz",
    text: "Nuestra plataforma ahora convierte mucho mejor y el flujo de clientes es constante.",
  },
  {
    name: "Luis Herrera",
    text: "El soporte y la implementación fueron clave para escalar nuestro negocio.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Resultados reales
        </h2>
        <p className="text-gray-400">
          Empresas que ya están creciendo con nuestras soluciones.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <Reveal key={t.name}>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-gray-300 mb-4">“{t.text}”</p>
              <span className="text-sm text-gray-500">{t.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
