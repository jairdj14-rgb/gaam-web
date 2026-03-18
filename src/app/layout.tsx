import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Loader from "@/components/ui/Loader";

// Fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

// SEO + Metadata
export const metadata = {
  title: "GAAM Systems | IA, Automatización y Desarrollo Web",
  description:
    "Creamos sistemas, automatización con IA, desarrollo web y soluciones tecnológicas para escalar negocios.",
  keywords: [
    "automatización",
    "inteligencia artificial",
    "desarrollo web",
    "marketing digital",
    "software",
  ],
  icons: {
    icon: "/atrium.svg",
  },
  openGraph: {
    title: "GAAM Systems",
    description: "Soluciones tecnológicas para crecimiento empresarial",
    url: "https://www.gaamsystems.com",
    siteName: "GAAM",
    locale: "es_MX",
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
      <body
        className={`${inter.variable} ${space.variable} bg-black text-white`}
      >
        <Loader />
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K67MPRSMPE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K67MPRSMPE');
          `}
        </Script>
      </body>
    </html>
  );
}
