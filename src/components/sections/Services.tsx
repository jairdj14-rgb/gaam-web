export default function Services() {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl mb-4">
          ¿Quieres automatizar más áreas de tu negocio?
        </h2>

        <p className="text-gray-400 mb-10">
          También desarrollamos sistemas personalizados y automatizaciones para
          empresas.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
            <h3 className="mb-2">Automatización de procesos</h3>
            <p className="text-sm text-gray-400">
              WhatsApp, ventas, seguimiento y operaciones.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
            <h3 className="mb-2">Sistemas personalizados</h3>
            <p className="text-sm text-gray-400">
              Software adaptado a tu negocio.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          (Esto es aparte del cotizador automático)
        </p>
      </div>
    </section>
  );
}
