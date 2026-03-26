import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cotizador por WhatsApp | Genera cotizaciones en segundos",
  description:
    "Crea cotizaciones profesionales desde WhatsApp en segundos. Ideal para plomeros, electricistas y técnicos que quieren cerrar más trabajos.",
  keywords: [
    "cotizador whatsapp",
    "generar cotizaciones pdf",
    "cotizaciones para plomeros",
    "cotizador para electricistas",
    "quote generator whatsapp",
    "contractor quote tool",
    "whatsapp quoting tool",
  ],
  authors: [{ name: "GAAM Systems" }],

  icons: {
    icon: "/atrium.svg",
  },

  openGraph: {
    title: "Cotizador por WhatsApp",
    description:
      "Genera cotizaciones profesionales en PDF desde WhatsApp en segundos.",
    url: "https://gaamsystems.com",
    siteName: "GAAM Systems",
    type: "website",
    locale: "es_MX",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cotizador por WhatsApp",
    description:
      "Genera cotizaciones profesionales en segundos desde WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
