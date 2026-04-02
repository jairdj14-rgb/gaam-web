import { contact } from "@/config/contact";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl mb-6">Cotiza antes de salir del lugar</h2>

      <p className="text-gray-400 mb-6">
        Cada trabajo que no cotizas al momento es dinero perdido.
      </p>

      <a
        href={contact.whatsappLink}
        target="_blank"
        className="bg-white text-black px-8 py-4 rounded-lg"
      >
        Cotizar ahora desde mi celular
      </a>
    </section>
  );
}
