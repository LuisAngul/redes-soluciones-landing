"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, RotateCw } from "lucide-react";
import { ServicioIcono } from "./ServicioIcono";

const resorte = { type: "spring", stiffness: 300, damping: 24, mass: 0.9 } as const;

export function TarjetaServicio({
  n,
  nombre,
  resumen,
  viñetas,
  imagen,
}: {
  n: number;
  nombre: string;
  resumen: string;
  viñetas: string[];
  imagen?: string;
}) {
  const [volteada, setVolteada] = useState(false);
  const frenteRef = useRef<HTMLButtonElement>(null);
  const versoRef = useRef<HTMLButtonElement>(null);
  const prefiereMenosMovimiento = useReducedMotion();

  function voltear(destino: boolean) {
    setVolteada(destino);
    requestAnimationFrame(() => {
      (destino ? versoRef : frenteRef).current?.focus();
    });
  }

  return (
    <article className="h-[460px] sm:h-[420px] lg:h-[380px]" style={{ perspective: 1600 }}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: volteada ? 180 : 0 }}
        transition={prefiereMenosMovimiento ? { duration: 0 } : resorte}
      >
        {/* Cara frontal */}
        <motion.button
          ref={frenteRef}
          type="button"
          onClick={() => voltear(true)}
          aria-hidden={volteada}
          tabIndex={volteada ? -1 : 0}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.97 }}
          style={{ backfaceVisibility: "hidden" }}
          className="group absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-xl border border-acero/15 bg-blanco text-left shadow-sm hover:border-azul/30 hover:shadow-lg"
        >
          {imagen ? (
            <>
              <div className="relative h-44 w-full shrink-0 overflow-hidden">
                <img
                  src={imagen}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <h3 className="text-xl font-semibold tracking-tight text-grafito">
                  {nombre}
                </h3>
              </div>
              <RotateCw
                aria-hidden="true"
                size={16}
                className="absolute right-5 top-5 rounded-full bg-blanco/80 p-0.5 text-grafito/60 transition-colors duration-300 group-hover:text-azul"
              />
            </>
          ) : (
            <div className="relative flex h-full flex-col p-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-azul/10 transition-colors duration-300 group-hover:bg-azul/15">
                <ServicioIcono n={n} />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-grafito">
                {nombre}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-acero">
                {resumen}
              </p>
              <RotateCw
                aria-hidden="true"
                size={16}
                className="absolute right-5 top-5 text-acero/30 transition-colors duration-300 group-hover:text-azul"
              />
            </div>
          )}
        </motion.button>

        {/* Cara trasera */}
        <motion.button
          ref={versoRef}
          type="button"
          onClick={() => voltear(false)}
          aria-hidden={!volteada}
          tabIndex={volteada ? 0 : -1}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.97 }}
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
          className="absolute inset-0 flex h-full w-full flex-col rounded-xl border border-azul bg-grafito p-6 text-left text-blanco shadow-lg"
        >
          <h3 className="text-lg font-semibold tracking-tight text-blanco">
            {nombre}
          </h3>
          {imagen && (
            <p className="mt-3 text-[14px] leading-relaxed text-blanco/80">
              {resumen}
            </p>
          )}
          <ul className="mt-4 space-y-2.5">
            {viñetas.map((viñeta) => (
              <li key={viñeta} className="flex gap-2 text-[14px] leading-snug text-blanco/85">
                <Check
                  aria-hidden="true"
                  size={16}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-ambar"
                />
                {viñeta}
              </li>
            ))}
          </ul>
          <RotateCw aria-hidden="true" size={16} className="absolute right-5 top-5 text-blanco/30" />
        </motion.button>
      </motion.div>
    </article>
  );
}
