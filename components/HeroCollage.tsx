"use client";

import { motion, type Variants } from "framer-motion";

const variantesTile: Variants = {
  oculto: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function transicion(delay: number) {
  return { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const };
}

export default function HeroCollage() {
  return (
    <div className="relative hidden lg:block">
      <div className="grid h-[560px] grid-cols-2 grid-rows-2 gap-5 xl:h-[620px]">
        <motion.div
          initial="oculto"
          animate="visible"
          variants={variantesTile}
          transition={transicion(0.15)}
          className="relative row-span-2 overflow-hidden rounded-xl ring-1 ring-blanco/10"
        >
          <img
            src="/hero/gabinete.jpg"
            alt="Gabinete de control industrial con módulos de automatización"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-grafito/70 via-transparent to-transparent"
          />
        </motion.div>
        <motion.div
          initial="oculto"
          animate="visible"
          variants={variantesTile}
          transition={transicion(0.3)}
          className="relative overflow-hidden rounded-xl ring-1 ring-blanco/10"
        >
          <img
            src="/hero/linea-produccion.jpg"
            alt="Línea de producción automatizada con panel de control HMI"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-grafito/60 via-transparent to-transparent"
          />
        </motion.div>
        <motion.div
          initial="oculto"
          animate="visible"
          variants={variantesTile}
          transition={transicion(0.42)}
          className="relative overflow-hidden rounded-xl ring-1 ring-blanco/10"
        >
          <img
            src="/hero/instrumentacion.jpg"
            alt="Instrumentación industrial de medición de flujo"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-grafito/70 via-transparent to-transparent"
          />
        </motion.div>
      </div>
      <motion.div
        initial="oculto"
        animate="visible"
        variants={variantesTile}
        transition={transicion(0.6)}
        className="absolute -bottom-8 -left-8 h-36 w-36 overflow-hidden rounded-lg border-4 border-ambar shadow-xl xl:h-44 xl:w-44"
      >
        <img
          src="/hero/torres-accent.jpg"
          alt="Torres de transmisión eléctrica de alta tensión al atardecer"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
