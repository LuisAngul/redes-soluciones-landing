export type Servicio = {
  nombre: string;
  icono: string;
  resumen: string;
  viñetas: string[];
  imagen?: string;
};

export const servicios: Servicio[] = [
  {
    nombre: "Automatización de procesos",
    icono: "workflow",
    resumen: "Control, supervisión y comunicación industrial de extremo a extremo.",
    imagen: "/servicios/automatizacion-procesos.jpg",
    viñetas: [
      "Control automático de procesos industriales, distribuido y remoto",
      "Sistemas SCADA y redes de comunicación industrial",
      "Reducción de tiempos y recursos operativos",
      "Mejora en la calidad del producto y la seguridad del personal",
    ],
  },
  {
    nombre: "Instrumentación industrial",
    icono: "gauge",
    resumen: "Medición y control preciso de las variables de tu proceso.",
    imagen: "/servicios/instrumentacion-industrial.jpg",
    viñetas: [
      "Diseño y montaje de sistemas de instrumentación",
      "Calibración y mantenimiento de equipos",
      "Monitoreo y control de variables industriales",
      "Consultoría y asesoría técnica especializada",
    ],
  },
  {
    nombre: "Energía solar",
    icono: "sun",
    resumen: "Proyectos fotovoltaicos on-grid y off-grid, de diseño a interventoría.",
    imagen: "/servicios/solar-panel.jpg",
    viñetas: [
      "Diseño y montaje de granjas solares",
      "Proyectos on-grid y off-grid",
      "Asesoría técnica especializada",
      "Interventoría de proyectos fotovoltaicos",
    ],
  },
  {
    nombre: "Electricidad industrial",
    icono: "zap",
    resumen: "Instalaciones y mantenimiento eléctrico para tu planta.",
    imagen: "/servicios/electricidad-industrial.jpg",
    viñetas: [
      "Instalaciones eléctricas industriales",
      "Mantenimiento preventivo y correctivo",
      "Diseño y construcción de cuadros eléctricos",
      "Sistemas de puesta a tierra e iluminación industrial",
    ],
  },
  {
    nombre: "Media y baja tensión",
    icono: "cable",
    resumen: "Líneas, subestaciones y redes con acompañamiento RETIE.",
    imagen: "/servicios/media-baja-tension.jpg",
    viñetas: [
      "Tendido de líneas e instalación de postes",
      "Diseño y montaje de subestaciones interiores y exteriores",
      "Instalación de medida directa y semidirecta",
      "Redes subterráneas, mantenimiento y acompañamiento RETIE",
    ],
  },
  {
    nombre: "Suministro de materiales",
    icono: "package",
    resumen: "Materiales y equipos de marcas líderes, listos para tu proyecto.",
    imagen: "/servicios/suministro-materiales.jpg",
    viñetas: [
      "Materiales eléctricos y de automatización de marcas reconocidas del sector",
      "Siemens, WEG, Danfoss, ABB, Delta, Omron, Schneider Electric y Rockwell Automation",
      "Gestión de compra y entrega para proyectos en ejecución",
    ],
  },
];
