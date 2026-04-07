import { contact } from "@/config/contact";
export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-white">¿Necesito instalar algo?</h3>
            <p>No. Todo funciona desde WhatsApp.</p>
          </div>

          <div>
            <h3 className="text-white">¿Funciona para cualquier técnico?</h3>
            <p>Sí. Está diseñado para servicios técnicos en general.</p>
          </div>

          <div>
            <h3 className="text-white">¿Puedo usar mi logo?</h3>
            <p>Sí, en el plan PRO.</p>
          </div>

          <div>
            <h3 className="text-white">
              ¿Qué pasa cuando se acaban mis cotizaciones?
            </h3>
            <p>Puedes escalar de plan en cualquier momento.</p>
            <p>Si refieres también ganas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
