import { contact } from "@/config/contact";

export default function CTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Empieza a cotizar en automático hoy
        </h2>

        <p className="text-gray-400 mb-10">
          Pruébalo gratis en WhatsApp. No necesitas conocimientos técnicos.
        </p>

        <a
          href={contact.whatsappLink}
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium"
        >
          Probar gratis ahora
        </a>

        <p className="text-sm text-gray-500 mt-4">
          5 cotizaciones gratis al mes
        </p>
      </div>
    </section>
  );
}
