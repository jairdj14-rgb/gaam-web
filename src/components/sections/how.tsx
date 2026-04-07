import { contact } from "@/config/contact";
export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10">
          Así de fácil funciona
        </h2>

        <div className="space-y-6 text-gray-300">
          <p>1. Escribes "Hola" en WhatsApp</p>
          <p>2. Respondes unas preguntas</p>
          <p>3. Recibes tu cotización en PDF lista</p>
        </div>
      </div>
    </section>
  );
}
