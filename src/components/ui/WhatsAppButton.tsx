"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/config/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappLink}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* GLOW */}
      <span className="absolute inset-0 rounded-full bg-white/10 blur-xl animate-ping" />

      {/* BOTÓN */}
      <div
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-full 
        shadow-[0_0_20px_rgba(255,255,255,0.1)]
        hover:scale-110 transition flex items-center justify-center"
      >
        <FaWhatsapp className="text-white text-xl" />
      </div>

      {/* MICROCOPY (NIVEL DIOS) */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 text-xs bg-white text-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Cotiza en segundos
      </span>
    </a>
  );
}
