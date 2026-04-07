import { contact } from "@/config/contact";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl mb-6">
        Cada cotización que no envías al momento es dinero perdido
      </h2>

      <a
        href={contact.whatsappLink}
        target="_blank"
        className="bg-green-500 text-black px-8 py-4 rounded-lg font-medium"
      >
        Probar GRATIS ahora en WhatsApp
      </a>
    </section>
  );
}
