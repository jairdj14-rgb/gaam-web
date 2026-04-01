"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mkoqpazy", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("Mensaje enviado ✅");
      e.target.reset();
    } else {
      setStatus("Error al enviar ❌");
    }
  }

  return (
    <section id="contacto" className="py-32 px-6 bg-black">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl mb-6">Hablemos de tu proyecto</h2>

        <p className="text-gray-400 mb-10">
          Te proponemos una solución real para tu negocio.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Nombre"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          />

          <input
            name="empresa"
            placeholder="Empresa"
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          />

          <select
            name="presupuesto"
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          >
            <option>Presupuesto estimado</option>
            <option>$5k - $10k</option>
            <option>$10k - $50k</option>
            <option>$50k+</option>
          </select>

          <textarea
            name="message"
            placeholder="¿Qué necesitas?"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          />

          <button className="bg-white text-black py-3 rounded-lg">
            Solicitar asesoría
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-sm">{status}</p>
      </div>
    </section>
  );
}
