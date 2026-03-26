const baseMessage =
  "Hola, vengo de tu página web y quiero instalar el cotizador de WhatsApp.";

export const contact = {
  phone: "5216241002876", // 👈 TU NÚMERO

  // 👉 AQUÍ EDITAS EL MENSAJE
  whatsappLink: `https://wa.me/5216241002876?text=${encodeURIComponent(
    baseMessage,
  )}`,
};
