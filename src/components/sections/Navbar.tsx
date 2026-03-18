"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { contact } from "@/config/contact";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["servicios", "proceso", "portafolio", "contacto"];

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
    `smooth ${
      active === id
        ? "text-white border-b border-white"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 smooth ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-lg font-semibold tracking-widest">
          GAAM<span className="text-red-500">.</span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#servicios" className={linkClass("servicios")}>
            Servicios
          </Link>

          <Link href="#proceso" className={linkClass("proceso")}>
            Proceso
          </Link>

          <Link href="#portafolio" className={linkClass("portafolio")}>
            Portafolio
          </Link>

          <Link href="#contacto" className={linkClass("contacto")}>
            Contacto
          </Link>
        </nav>

        {/* CTA */}
        <a
          href={contact.whatsappLink}
          target="_blank"
          className="group relative border border-white/20 px-5 py-2 rounded-lg text-sm overflow-hidden smooth"
        >
          <span className="relative z-10">Contactar</span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
        </a>
      </div>
    </header>
  );
}
