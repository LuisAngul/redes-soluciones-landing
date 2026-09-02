"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const enlaces = [
  { href: "#servicios", label: "Servicios" },
  { href: "#alquiler", label: "Alquiler de equipos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#cotizacion", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const claro = scrolled || abierto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        claro ? "border-b border-acero/20 bg-blanco" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-2 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
        <a href="#" className="shrink-0">
          <img
            src="/logo.png"
            alt="Redes Eléctricas y Soluciones SAS"
            className="h-10 w-auto max-w-[120px] object-contain sm:h-15 sm:max-w-none"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className={`group relative py-1 text-[15px] font-medium transition-colors duration-200 ${
                claro ? "text-grafito/80 hover:text-grafito" : "text-blanco/80 hover:text-blanco"
              }`}
            >
              {enlace.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100 ${
                  claro ? "bg-azul" : "bg-ambar"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="#cotizacion"
            className="shrink-0 whitespace-nowrap bg-ambar px-3 py-2.5 text-center text-sm font-semibold leading-tight text-grafito transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 sm:px-4 sm:text-base"
          >
            <span className="sm:hidden">Cotizar</span>
            <span className="hidden sm:inline">Solicitar cotización</span>
          </a>
          <button
            type="button"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center lg:hidden ${claro ? "text-grafito" : "text-blanco"}`}
          >
            {abierto ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="border-t border-acero/20 bg-blanco lg:hidden">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col px-6 py-4">
            {enlaces.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                onClick={() => setAbierto(false)}
                className="border-b border-acero/10 py-3 text-[15px] font-medium text-grafito/80 transition-colors duration-200 last:border-b-0 hover:text-grafito"
              >
                {enlace.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
