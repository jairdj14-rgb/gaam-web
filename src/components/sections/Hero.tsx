"use client";

import { contact } from "@/config/contact";
import { useEffect, useState } from "react";

export default function Hero() {
  const [step, setStep] = useState(0);
  const [liveCount, setLiveCount] = useState(3);
  const [secondsAgo, setSecondsAgo] = useState(5);

  useEffect(() => {
    const flow = setInterval(() => {
      setStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 1800);
    return () => clearInterval(flow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => {
        let next = prev + (Math.random() > 0.5 ? 1 : -1);
        if (next < 2) next = 2;
        if (next > 7) next = 7;
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo((prev) => (prev > 15 ? 3 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black overflow-hidden text-center">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-4xl z-10">
        <p className="text-xs text-green-400 mb-2 animate-pulse">
          {liveCount} técnicos están cotizando ahora mismo
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Cotiza en el momento desde tu celular y cierra el trabajo más rápido
        </h1>

        <p className="text-gray-400 text-lg mb-4">
          Genera cotizaciones profesionales desde WhatsApp sin laptop, sin Excel
          y sin llegar a casa.
        </p>

        <p className="text-red-400 text-sm mb-6">
          Si no cotizas en el momento, el cliente se enfría… y se va con otro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contact.whatsappLink}
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            Cotizar ahora desde mi celular
          </a>

          <a
            href="#planes"
            className="border border-white/20 px-6 py-3 rounded-lg"
          >
            Ver planes
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Más de 100 técnicos ya cotizan en sitio
        </p>

        {/* DEMO */}
        <div className="mt-12 max-w-md mx-auto text-left space-y-3">
          <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
            <p className="text-sm">Técnico: Instalación de 4 cámaras</p>
          </div>

          {step === 1 && (
            <div className="bg-white/10 border border-white/20 p-3 rounded-xl">
              <p className="text-sm text-gray-400 animate-pulse">
                Escribiendo...
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white/10 border border-white/20 p-3 rounded-xl">
              <p className="text-sm text-gray-300">Generando cotización...</p>
            </div>
          )}

          {step >= 3 && (
            <div className="bg-white text-black p-4 rounded-xl">
              <p className="text-sm font-medium">Instalación CCTV</p>
              <p className="text-sm">$4,500 MXN</p>
              <p className="text-green-600 text-xs mt-1">
                PDF generado hace {secondsAgo}s
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
