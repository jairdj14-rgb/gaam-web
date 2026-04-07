"use client";

import { contact } from "@/config/contact";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-lg font-semibold tracking-widest">
          GAAM<span className="text-red-500">.</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#planes" className="text-gray-400">
            Planes
          </a>
        </nav>

        <a
          href={contact.whatsappLink}
          target="_blank"
          className="bg-green-500 text-black px-5 py-2 rounded-lg font-medium"
        >
          Probar gratis
        </a>
      </div>
    </header>
  );
}
