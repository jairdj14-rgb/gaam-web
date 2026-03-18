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
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Cuéntanos sobre tu proyecto
        </h2>

        <p className="text-gray-400 mb-10">
          Analizamos tu caso y te proponemos una solución clara.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          />

          <textarea
            name="message"
            placeholder="¿Qué necesitas?"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          />

          <button className="bg-white text-black py-3 rounded-lg font-medium smooth hover:scale-105">
            Enviar mensaje
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-sm">{status}</p>
      </div>
    </section>
  );
}
