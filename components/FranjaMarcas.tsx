import Container from "./ui/Container";
import Revelar from "./ui/Revelar";
import { MarqueeRow, MarqueeStyles } from "./ui/testimonial-marquee";

const marcas = [
  { nombre: "Siemens", ruta: "/marcas/siemens.svg" },
  { nombre: "WEG", ruta: "/marcas/weg.svg" },
  { nombre: "Danfoss", ruta: "/marcas/danfoss.svg" },
  { nombre: "ABB", ruta: "/marcas/abb.svg" },
  { nombre: "Delta", ruta: "/marcas/delta.svg" },
  { nombre: "Omron", ruta: "/marcas/omron.png" },
  { nombre: "Schneider Electric", ruta: "/marcas/schneider-electric.svg" },
  { nombre: "Rockwell Automation", ruta: "/marcas/rockwell-automation.svg" },
];

const marcasCarrusel = [...marcas, ...marcas, ...marcas];

export default function FranjaMarcas() {
  return (
    <section
      aria-label="Marcas que suministramos"
      className="border-t border-acero/20 bg-tecnico py-10"
    >
      <Container>
        <Revelar>
          <p className="text-[15px] text-acero">
            Trabajamos con marcas reconocidas del sector eléctrico y de
            automatización.
          </p>
        </Revelar>
      </Container>

      <Revelar delay={0.1} className="relative mt-6 overflow-hidden">
        <MarqueeStyles />
        <MarqueeRow speed={34} direction="left" className="[--gap:3.5rem] p-0">
          {marcasCarrusel.map((marca, i) => (
            <img
              key={`${marca.nombre}-${i}`}
              src={marca.ruta}
              alt={marca.nombre}
              className="h-[26px] w-auto shrink-0 grayscale opacity-70 transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-[42px]"
              loading="lazy"
            />
          ))}
        </MarqueeRow>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-tecnico to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-tecnico to-transparent" />
      </Revelar>
    </section>
  );
}
