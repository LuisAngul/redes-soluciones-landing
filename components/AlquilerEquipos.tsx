import { Gauge } from "lucide-react";
import Container from "./ui/Container";
import Revelar from "./ui/Revelar";
import { equipos } from "@/lib/equipos";

export default function AlquilerEquipos() {
  return (
    <section id="alquiler" className="bg-grafito py-20">
      <Container>
        <Revelar>
          <p className="font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-ambar">
            Alquiler
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-blanco">
            Alquiler de equipos de medición
          </h2>
          <p className="mt-3 max-w-[68ch] text-[17px] text-blanco/70">
            Instrumentación de precisión disponible para estudios eléctricos en
            campo, con soporte técnico de nuestros ingenieros.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-acero/30">
            <div className="hidden sm:grid sm:grid-cols-2 border-b border-acero/30 bg-blanco/5 px-4 py-3">
              <span className="font-medium text-acero">Equipo</span>
              <span className="font-medium text-acero">Medición</span>
            </div>
            <ul className="divide-y divide-acero/30">
              {equipos.map((equipo) => (
                <li
                  key={equipo.equipo}
                  className="grid grid-cols-1 gap-1 px-4 py-4 transition-colors duration-200 hover:bg-blanco/5 sm:grid-cols-2 sm:items-center sm:py-3"
                >
                  <span className="flex items-center gap-2.5 text-[17px] text-blanco">
                    <Gauge aria-hidden="true" size={18} className="shrink-0 text-azul" />
                    {equipo.equipo}
                  </span>
                  <span className="font-mono text-[15px] text-ambar">
                    {equipo.medicion}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Revelar>
      </Container>
    </section>
  );
}
