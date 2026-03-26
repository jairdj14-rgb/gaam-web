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

      const sections = ["beneficios", "como-funciona", "casos", "contacto"];

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
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        {/* LOGO */}
        <div className="text-lg font-semibold tracking-widest">
          GAAM<span className="text-red-500">.</span>
        </div>

        {/* LINKS */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="#beneficios" className={linkClass("beneficios")}>
            Beneficios
          </Link>
          <Link href="#como-funciona" className={linkClass("como-funciona")}>
            Cómo funciona
          </Link>
          <Link href="#casos" className={linkClass("casos")}>
            Casos
          </Link>
          <Link href="#contacto" className={linkClass("contacto")}>
            Contacto
          </Link>
        </nav>

        {/* CTA */}
        <a
          href={contact.whatsappLink}
          target="_blank"
          className="bg-white text-black px-5 py-2 rounded-lg smooth hover:opacity-90"
        >
          Probar gratis
        </a>
      </div>
    </header>
  );
}
