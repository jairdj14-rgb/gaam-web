import { contact } from "@/config/contact";

export default function CTA() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          Lleva tu negocio al siguiente nivel con{" "}
          <span className="text-red-500">tecnología inteligente</span>
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Agenda una llamada o escríbenos directamente. Analizamos tu caso y te
          proponemos una solución clara.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={contact.whatsappLink}
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Escribir por WhatsApp
          </a>

          <button className="border border-white/20 smooth px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Agendar llamada
          </button>
        </div>
      </div>
    </section>
  );
}
