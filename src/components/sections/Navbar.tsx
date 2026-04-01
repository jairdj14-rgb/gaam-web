"use client";

import { contact } from "@/config/contact";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold tracking-widest">
          GAAM<span className="text-white">.</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#planes" className="hover:text-white">
            Planes
          </a>
          <a href="#contacto" className="hover:text-white">
            Contacto
          </a>
        </nav>

        <a
          href={contact.whatsappLink}
          target="_blank"
          className="bg-white text-black px-5 py-2 rounded-lg font-medium"
        >
          Probar demo
        </a>
      </div>
    </header>
  );
}
