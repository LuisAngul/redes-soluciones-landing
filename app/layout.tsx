import type { Metadata } from "next";
import { archivo, ibmPlexSans, ibmPlexMono } from "./fonts";
import "./globals.css";

const siteUrl = "https://www.redeselectricas.com.co";

export const metadata: Metadata = {
  title:
    "Redes Eléctricas y Soluciones SAS | Ingeniería eléctrica, instrumentación y automatización en Barranquilla",
  description:
    "Diseño, montaje y mantenimiento de proyectos eléctricos, instrumentación, automatización y energía solar. Alquiler de equipos de medición. Barranquilla, Colombia.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Redes Eléctricas y Soluciones SAS",
    title:
      "Redes Eléctricas y Soluciones SAS | Ingeniería eléctrica, instrumentación y automatización en Barranquilla",
    description:
      "Soluciones integrales en ingeniería eléctrica, electrónica, instrumentación y automatización industrial para la industria del Caribe colombiano.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Redes Eléctricas y Soluciones SAS",
  telephone: "+57 301 643 4302",
  email: "comercial@redeselectricas.com.co",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barranquilla",
    addressRegion: "Atlántico",
    addressCountry: "CO",
  },
  areaServed: "Región Caribe, Colombia",
  description:
    "Soluciones integrales de ingeniería eléctrica, electrónica, instrumentación y automatización industrial. Alquiler de equipos de medición.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CO"
      className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
