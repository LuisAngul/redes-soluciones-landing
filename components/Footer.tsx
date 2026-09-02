import Container from "./ui/Container";
import { siteConfig } from "@/lib/site-config";

const enlaces = [
  { href: "#servicios", label: "Servicios" },
  { href: "#alquiler", label: "Alquiler de equipos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#cotizacion", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-grafito text-acero">
      <Container className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt="Redes Eléctricas y Soluciones SAS"
            className="h-13 w-auto sm:h-15"
          />
          <p className="mt-4 text-[15px]">NIT 900.442.127-8</p>
          <p className="mt-1 text-[15px]">Barranquilla – Colombia</p>
        </div>

        <div>
          <p className="font-medium text-blanco">Contacto</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            <li>
              <a
                 href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-blanco"
              >
                 Teléfono / WhatsApp: {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                 href={`mailto:${siteConfig.email}`}
                className="transition-colors duration-200 hover:text-blanco"
              >
                 {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                 href={siteConfig.url}
                className="transition-colors duration-200 hover:text-blanco"
              >
                 {siteConfig.url.replace(/^https?:\/\//, "")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-blanco">Navegación</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href} className="hover:text-blanco">
                  {enlace.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-medium text-blanco">Datos personales</p>
          <p className="mt-3 text-[15px]">
            Tratamiento de datos personales conforme a la Ley 1581 de 2012
            (Colombia).
          </p>
        </div>
      </Container>
    </footer>
  );
}
