"use client";

import { contact } from "@/config/contact";
import Parallax from "@/components/ui/Parallax";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black bg-grid">
      {/* fondo sistema */}
      <div className="absolute inset-0 data-flow pointer-events-none" />

      <Parallax>
        <div
          className="relative max-w-4xl w-full p-10 md:p-14 rounded-3xl 
          bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-[0_0_80px_rgba(255,255,255,0.05)]
          hover:shadow-[0_0_120px_rgba(255,255,255,0.08)]
          transition transform-gpu smooth"
        >
          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Diseñamos sistemas inteligentes para empresas que quieren escalar
          </h1>

          {/* SUBCOPY (MEJORADO PARA CONVERSIÓN) */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
            Automatización, desarrollo e infraestructura tecnológica enfocada en
            eficiencia y crecimiento real.
          </p>

          {/*  MENSAJE  */}
          <p className="text-gray-500 mb-10 max-w-xl">
            No implementamos herramientas aisladas. Creamos sistemas completos
            para hacer crecer tu negocio.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* BOTÓN PRINCIPAL (MEJOR COPY) */}
            <a
              href={contact.whatsappLink}
              target="_blank"
              onClick={() => console.log("click whatsapp")}
              className="group relative bg-white text-black px-6 py-3 rounded-lg font-medium overflow-hidden smooth hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">
                Agenda una asesoría gratuita
              </span>
              <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            </a>

            {/* BOTÓN SECUNDARIO */}
            <a
              href="#servicios"
              className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 smooth"
            >
              Ver soluciones
            </a>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
