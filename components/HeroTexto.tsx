"use client";

import { motion } from "framer-motion";

const titulo = "Innovación y precisión en cada proceso";
const palabras = titulo.split(" ");
const easeSalida = [0.16, 1, 0.3, 1] as const;

export default function HeroTexto() {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-14 text-center">
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeSalida }}
          className="inline-block w-fit rounded-full border border-blanco/15 bg-blanco/5 px-4 py-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-ambar"
        >
          Ingeniería · Automatización · Energía solar
        </motion.span>

        <h1 className="mt-6 max-w-[18ch] text-[34px] font-bold leading-tight tracking-tight text-blanco md:text-[56px]">
          {palabras.map((palabra, i) => (
            <span key={`${palabra}-${i}`}>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: easeSalida }}
                className="inline-block"
              >
                {palabra}
              </motion.span>
              {i < palabras.length - 1 && " "}
            </span>
          ))}
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15 + palabras.length * 0.07 + 0.1,
          ease: easeSalida,
        }}
        className="max-w-[52ch] text-[15px] leading-relaxed text-blanco/80"
      >
        Soluciones integrales en ingeniería eléctrica, electrónica,
        instrumentación y automatización industrial para la industria del
        Caribe colombiano.
      </motion.p>
    </div>
  );
}
