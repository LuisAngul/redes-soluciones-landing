export const SERVICIOS_OPCIONES = [
  "Automatización de procesos",
  "Instrumentación industrial",
  "Energía solar",
  "Electricidad industrial",
  "Media y baja tensión",
  "Suministro de materiales",
  "Alquiler de equipos de medición",
  "Otro",
] as const;

export type ServicioOpcion = (typeof SERVICIOS_OPCIONES)[number];
