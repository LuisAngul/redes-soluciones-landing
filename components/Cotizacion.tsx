"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Container from "./ui/Container";
import Revelar from "./ui/Revelar";
import { SERVICIOS_OPCIONES } from "@/lib/cotizacion";
import { siteConfig } from "@/lib/site-config";

type Estado = "idle" | "enviando" | "exito" | "error";

const inicial = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  ciudad: "",
  servicio: "",
  descripcion: "",
};

export default function Cotizacion() {
  const [form, setForm] = useState(inicial);
  const [estado, setEstado] = useState<Estado>("idle");

  function setCampo(campo: keyof typeof inicial, valor: string) {
    setForm((f) => ({ ...f, [campo]: valor }));
  }

  function esCorreoValido(correo: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  }

  function construirMensaje() {
    const lineas = [
      "Hola, quiero cotizar un servicio.",
      "",
      `Nombre: ${form.nombre}`,
      `Empresa: ${form.empresa}`,
      `Correo: ${form.correo}`,
      `Teléfono: ${form.telefono}`,
      `Ciudad: ${form.ciudad || "-"}`,
      `Servicio de interés: ${form.servicio || "-"}`,
      "",
      `Necesidad: ${form.descripcion || "-"}`,
    ];
    return lineas.join("\n");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.nombre ||
      !form.empresa ||
      !esCorreoValido(form.correo) ||
      !form.telefono
    ) {
      setEstado("error");
      return;
    }

    setEstado("enviando");

    // TODO: conectar con el servicio de correo o CRM.
    // Conversión actual: enviamos la solicitud prellenada por WhatsApp.
    window.open(
      `${siteConfig.whatsappUrl}?text=${encodeURIComponent(construirMensaje())}`,
      "_blank",
      "noopener,noreferrer",
    );

    setEstado("exito");
  }

  const inputClase =
    "w-full border border-acero/30 bg-blanco/5 px-3 py-2.5 text-[15px] text-blanco placeholder:text-blanco/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ambar hover:border-acero/50";

  return (
    <section id="cotizacion" className="bg-grafito py-20">
      <Container>
        <Revelar>
          <p className="font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-ambar">
            Cotización
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-blanco">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="mt-3 max-w-[68ch] text-[17px] text-blanco/70">
            Cuéntanos qué necesitas y un ingeniero te responde con una propuesta
            técnica y comercial.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr]">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-1.5 block text-[15px] font-medium text-blanco"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    value={form.nombre}
                    onChange={(e) => setCampo("nombre", e.target.value)}
                    className={inputClase}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="empresa"
                    className="mb-1.5 block text-[15px] font-medium text-blanco"
                  >
                    Empresa *
                  </label>
                  <input
                    id="empresa"
                    value={form.empresa}
                    onChange={(e) => setCampo("empresa", e.target.value)}
                    className={inputClase}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="mb-1.5 block text-[15px] font-medium text-blanco"
                  >
                    Correo *
                  </label>
                  <input
                    id="correo"
                    type="email"
                    value={form.correo}
                    onChange={(e) => setCampo("correo", e.target.value)}
                    className={inputClase}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="mb-1.5 block text-[15px] font-medium text-blanco"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="telefono"
                    value={form.telefono}
                    onChange={(e) => setCampo("telefono", e.target.value)}
                    className={inputClase}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="ciudad"
                    className="mb-1.5 block text-[15px] font-medium text-blanco"
                  >
                    Ciudad
                  </label>
                  <input
                    id="ciudad"
                    value={form.ciudad}
                    onChange={(e) => setCampo("ciudad", e.target.value)}
                    className={inputClase}
                  />
                </div>
                <div>
                  <label
                    htmlFor="servicio"
                    className="mb-1.5 block text-[15px] font-medium text-blanco"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    value={form.servicio}
                    onChange={(e) => setCampo("servicio", e.target.value)}
                    className={inputClase}
                  >
                    <option value="" className="text-grafito">
                      Selecciona un servicio
                    </option>
                    {SERVICIOS_OPCIONES.map((opcion) => (
                      <option key={opcion} value={opcion} className="text-grafito">
                        {opcion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="descripcion"
                  className="mb-1.5 block text-[15px] font-medium text-blanco"
                >
                  Descripción de la necesidad
                </label>
                <textarea
                  id="descripcion"
                  rows={4}
                  value={form.descripcion}
                  onChange={(e) => setCampo("descripcion", e.target.value)}
                  className={inputClase}
                />
              </div>

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="bg-ambar px-6 py-3 font-semibold text-grafito transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
              >
                {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
              </button>

              {estado === "exito" && (
                <p
                  role="status"
                  className="flex items-start gap-2.5 border border-ambar/30 bg-ambar/10 px-4 py-3 text-[15px] text-blanco"
                >
                  <CheckCircle2 aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-ambar" />
                  Solicitud enviada. Te contactamos dentro de las próximas 24
                  horas hábiles.
                </p>
              )}
              {estado === "error" && (
                <p
                  role="alert"
                  className="flex items-start gap-2.5 border border-red-400/30 bg-red-400/10 px-4 py-3 text-[15px] text-blanco"
                >
                  <AlertCircle aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-red-400" />
                   No se pudo enviar la solicitud. Verifica los campos obligatorios
                   o escríbenos a {siteConfig.email} o al WhatsApp {siteConfig.phoneDisplay}.
                </p>
              )}
            </form>

            <aside className="space-y-6">
              <p className="font-display text-[20px] font-semibold tracking-tight text-blanco">
                Contacto
              </p>
              <div className="space-y-4 text-[15px]">
                <p>
                  <a
                     href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(
                      "Hola, quiero cotizar un servicio.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blanco/85 transition-colors duration-200 hover:text-blanco"
                  >
                     Teléfono / WhatsApp: <span className="text-ambar">{siteConfig.phoneDisplay}</span>
                  </a>
                </p>
                <p>
                  <a
                     href={`mailto:${siteConfig.email}`}
                    className="text-blanco/85 transition-colors duration-200 hover:text-blanco"
                  >
                     Correo: {siteConfig.email}
                  </a>
                </p>
                <p>
                  <a
                     href={siteConfig.url}
                    className="text-blanco/85 transition-colors duration-200 hover:text-blanco"
                  >
                     Sitio web: {siteConfig.url.replace(/^https?:\/\//, "")}
                  </a>
                </p>
                <p className="text-blanco/85">Barranquilla, Colombia</p>
              </div>
            </aside>
          </div>
        </Revelar>
      </Container>
    </section>
  );
}
