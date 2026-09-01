import Container from "./ui/Container";
import Revelar from "./ui/Revelar";

const texto =
  "Redes Eléctricas y Soluciones SAS es una empresa especializada en soluciones integrales de ingeniería eléctrica, electrónica, instrumentación y automatización, con más de 10 años de experiencia en el sector. Fundada por ingenieros y personal técnico altamente calificado, nos enfocamos en el diseño, desarrollo y ejecución de proyectos de montaje y mantenimiento de equipos eléctricos y electrónicos, obras eléctricas, automatización-control y estudios de calidad de energía.";

const bloques = [
  {
    titulo: "Misión",
    texto:
      "Suministrar materiales y ejecutar proyectos de ingeniería con soluciones innovadoras y confiables, con un servicio personalizado y profesional.",
  },
  {
    titulo: "Visión",
    texto:
      "Ser líderes del mercado en desarrollo y ejecución de proyectos de ingeniería, reconocidos por nuestra excelencia técnica y compromiso con la calidad.",
  },
];

export default function Nosotros() {
  return (
    <section className="bg-tecnico py-20">
      <Container>
        <Revelar className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <h2 className="sr-only">Nosotros</h2>
          <p className="max-w-[68ch] text-[17px] leading-relaxed text-grafito/85">
            {texto}
          </p>
          <div className="space-y-6">
            {bloques.map((bloque) => (
              <div
                key={bloque.titulo}
                className="border-l-2 border-azul bg-blanco px-6 py-5 transition-shadow duration-300 hover:shadow-md"
              >
                <h3 className="text-[20px] font-semibold tracking-tight text-grafito">
                  {bloque.titulo}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-acero">
                  {bloque.texto}
                </p>
              </div>
            ))}
          </div>
        </Revelar>
      </Container>
    </section>
  );
}
