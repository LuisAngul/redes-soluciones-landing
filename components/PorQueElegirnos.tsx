import { HeartHandshake, ShieldCheck, Users } from "lucide-react";
import Container from "./ui/Container";
import Revelar from "./ui/Revelar";

const bloques = [
  {
    titulo: "Calidad y precisión",
    texto:
      "Tecnología de punta y métodos innovadores para resultados confiables y verificables.",
    Icono: ShieldCheck,
  },
  {
    titulo: "Equipo experto",
    texto:
      "Ingenieros y personal técnico altamente calificado, con amplia experiencia en el sector.",
    Icono: Users,
  },
  {
    titulo: "Atención personalizada",
    texto:
      "Soluciones a medida, con acompañamiento desde la planeación hasta la implementación.",
    Icono: HeartHandshake,
  },
];

export default function PorQueElegirnos() {
  return (
    <section id="nosotros" className="bg-blanco py-20">
      <Container>
        <Revelar>
          <h2 className="text-4xl font-bold tracking-tight text-grafito">
            Por qué trabajar con nosotros
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {bloques.map((bloque) => (
              <div
                key={bloque.titulo}
                className="rounded-xl border border-acero/15 bg-tecnico p-6 transition duration-300 hover:-translate-y-1 hover:border-azul/30 hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-azul/10">
                  <bloque.Icono aria-hidden="true" size={26} strokeWidth={1.5} className="text-azul" />
                </span>
                <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-grafito">
                  {bloque.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-acero">
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
