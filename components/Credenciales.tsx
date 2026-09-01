import { Award, Building2, MapPin, ShieldCheck } from "lucide-react";
import Container from "./ui/Container";
import Revelar from "./ui/Revelar";

const datos = [
  { cifra: "+10 años", texto: "de experiencia en el sector", Icono: Award },
  { cifra: "Barranquilla", texto: "cobertura en la región Caribe", Icono: MapPin },
  { cifra: "RETIE", texto: "acompañamiento en normativa", Icono: ShieldCheck },
  { cifra: "NIT 900.442.127-8", texto: "empresa constituida", Icono: Building2 },
];

export default function Credenciales() {
  return (
    <section aria-label="Credenciales" className="border-b border-acero/20 bg-blanco">
      <Container>
        <Revelar className="grid grid-cols-1 divide-y divide-acero/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {datos.map((d) => (
            <div
              key={d.cifra}
              className="flex items-start gap-3 py-6 lg:border-l lg:first:border-l-0 lg:px-6 lg:first:pl-0"
            >
              <d.Icono aria-hidden="true" size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-azul" />
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight text-grafito">
                  {d.cifra}
                </p>
                <p className="mt-1 text-[15px] text-acero">{d.texto}</p>
              </div>
            </div>
          ))}
        </Revelar>
      </Container>
    </section>
  );
}
