function generarPathOnda(ancho: number, alto: number, ciclos: number): string {
  const puntos: string[] = [];
  const pasos = 200;
  for (let i = 0; i <= pasos; i++) {
    const t = i / pasos;
    const x = t * ancho;
    const fase = t * ciclos * Math.PI * 2;
    // Onda fundamental + tercer armónico (distorsión armónica real de QoS)
    const y = alto / 2 + (alto / 2) * 0.72 * Math.sin(fase) - (alto / 2) * 0.22 * Math.sin(3 * fase + 0.4);
    puntos.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M ${puntos.join(" L ")}`;
}

export default function TrazoOnda() {
  const ancho = 1440;
  const alto = 220;
  const d = generarPathOnda(ancho, alto, 4);

  return (
    <svg
      className="h-full w-full"
      viewBox={`0 0 ${ancho} ${alto}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="trazo-onda"
        d={d}
        fill="none"
        stroke="var(--color-ambar)"
        strokeWidth="3"
        style={{ strokeDasharray: 3200, strokeDashoffset: 3200 }}
      />
    </svg>
  );
}
