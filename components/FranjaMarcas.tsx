import Container from "./ui/Container";
import Revelar from "./ui/Revelar";

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
          <div className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-4">
            {marcas.map((marca) => (
              <img
                key={marca.nombre}
                src={marca.ruta}
                alt={marca.nombre}
                className="h-[26px] w-auto grayscale opacity-70 transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-[46px]"
                loading="lazy"
              />
            ))}
          </div>
        </Revelar>
      </Container>
    </section>
  );
}
