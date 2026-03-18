import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Análisis",
    desc: "Entendemos tu negocio, procesos y oportunidades reales.",
  },
  {
    title: "Estrategia",
    desc: "Diseñamos una solución clara enfocada en resultados.",
  },
  {
    title: "Implementación",
    desc: "Desarrollamos y automatizamos sistemas eficientes.",
  },
  {
    title: "Optimización",
    desc: "Medimos, ajustamos y escalamos lo que funciona.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Nuestro proceso
        </h2>
        <p className="text-gray-400">
          Un enfoque claro, estructurado y orientado a resultados reales.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <Reveal key={step.title}>
            <div className="text-center">
              <div className="text-red-500 text-lg mb-2">0{i + 1}</div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
