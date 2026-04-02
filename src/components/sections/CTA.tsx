import { contact } from "@/config/contact";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl mb-6">Empieza hoy y deja de perder clientes</h2>

      <p className="text-gray-400 mb-6">
        Cada minuto que tardas en responder es dinero perdido.
      </p>

      <a
        href={contact.whatsappLink}
        target="_blank"
        className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:scale-105 transition"
      >
        Cotizar ahora en WhatsApp
      </a>

      <p className="text-gray-500 text-sm mt-4">
        Responde en segundos. Cierra más trabajos hoy.
      </p>
    </section>
  );
}
