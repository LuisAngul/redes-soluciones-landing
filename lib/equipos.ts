export type Equipo = {
  equipo: string;
  medicion: string;
};

export const equipos: Equipo[] = [
  { equipo: "Analizador de redes", medicion: "Calidad de energía" },
  { equipo: "Medidor de aislamiento", medicion: "Resistencia de aislamiento" },
  {
    equipo: "Analizador digital de transformadores",
    medicion: "Diagnóstico de transformadores",
  },
  { equipo: "Telurómetro", medicion: "Resistividad del suelo" },
  {
    equipo: "Equipo de tensiones de paso y contacto",
    medicion: "Tensiones de paso y contacto",
  },
  { equipo: "Cámara termográfica", medicion: "Termografía" },
  {
    equipo: "Pinza amperimétrica de puesta a tierra",
    medicion: "Continuidad de puesta a tierra",
  },
  { equipo: "Micróhmetro 100 A", medicion: "Resistencia de contactos" },
  {
    equipo: "Medidor de aislamiento VLF",
    medicion: "Aislamiento en media tensión",
  },
];
