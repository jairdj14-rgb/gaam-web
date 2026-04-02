"use client";

import { useEffect, useState } from "react";
import { contact } from "@/config/contact";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["planes", "contacto"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative pb-1 ${active === id ? "text-white" : "text-gray-400"}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO CLICKABLE */}
        <a href="#" className="text-lg font-semibold tracking-widest">
          GAAM<span className="text-red-500">.</span>
        </a>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#planes" className={linkClass("planes")}>
            Planes
            {active === "planes" && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
            )}
          </a>

          <a href="#contacto" className={linkClass("contacto")}>
            Contacto
            {active === "contacto" && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
            )}
          </a>
        </nav>

        {/* CTA */}
        <a
          href={contact.whatsappLink}
          target="_blank"
          className="bg-white text-black px-5 py-2 rounded-lg font-medium"
        >
          Cotizar ahora
        </a>
      </div>
    </header>
  );
}
