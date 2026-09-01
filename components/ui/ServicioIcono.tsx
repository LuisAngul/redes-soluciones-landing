import type { ReactNode } from "react";
import { Workflow, Gauge, Sun, Zap, Cable, Package } from "lucide-react";

const iconos = [Workflow, Gauge, Sun, Zap, Cable, Package] as const;
const iconoNames = [
  "Automatización",
  "Instrumentación",
  "Energía solar",
  "Electricidad",
  "Media y baja",
  "Suministro",
];

export function ServicioIcono({ n }: { n: number }) {
  const Icono = iconos[n] ?? Package;
  return (
    <Icono
      className="text-azul"
      strokeWidth={1.5}
      size={28}
      aria-hidden="true"
      aria-label={iconoNames[n]}
    />
  );
}

export function ContenidoServicios({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
