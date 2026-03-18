import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GAAM Systems | Sistemas para escalar negocios",
  description:
    "Diseñamos sistemas inteligentes para automatizar procesos, optimizar operaciones y hacer crecer empresas.",
  keywords: [
    "automatización",
    "desarrollo web",
    "sistemas empresariales",
    "tecnología negocios",
  ],
  authors: [{ name: "GAAM Systems" }],
  openGraph: {
    title: "GAAM Systems",
    description: "Sistemas inteligentes para empresas que quieren escalar.",
    url: "https://gaamsystems.com",
    siteName: "GAAM Systems",
    type: "website",
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
