import Container from "./ui/Container";
import Revelar from "./ui/Revelar";
import { servicios } from "@/lib/servicios";
import { TarjetaServicio } from "./ui/TarjetaServicio";

export default function Servicios() {
  return (
    <section id="servicios" className="bg-tecnico py-20">
      <Container>
        <Revelar>
          <p className="font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-azul">
            Qué hacemos
          </p>
          <h2 className="mt-2 max-w-[24ch] text-4xl font-bold tracking-tight text-grafito">
            Soluciones de ingeniería a la medida de tu operación
          </h2>
          <p className="mt-3 max-w-[60ch] text-[15px] text-acero">
            Toca cada tarjeta para ver el detalle del servicio.
          </p>
        </Revelar>
        <Revelar
          delay={0.15}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicios.map((servicio, i) => (
            <TarjetaServicio
              key={servicio.nombre}
              n={i}
              nombre={servicio.nombre}
              resumen={servicio.resumen}
              viñetas={servicio.viñetas}
              imagen={servicio.imagen}
            />
          ))}
        </Revelar>
      </Container>
    </section>
  );
}
