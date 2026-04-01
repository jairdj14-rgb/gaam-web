import { contact } from "@/config/contact";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl mb-6">
        Empieza a cotizar como una empresa profesional
      </h2>

      <p className="text-gray-400 mb-10">
        Automatiza tu proceso hoy y deja de perder clientes por tardar en
        responder.
      </p>

      <a
        href={contact.whatsappLink}
        target="_blank"
        className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium"
      >
        Probar ahora en WhatsApp
      </a>
    </section>
  );
}
