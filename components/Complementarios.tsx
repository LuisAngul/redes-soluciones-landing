import { ClipboardList, GraduationCap, Layers } from "lucide-react";
import Container from "./ui/Container";
import Revelar from "./ui/Revelar";

const items = [
  {
    titulo: "Integración de sistemas",
    texto: "Conectividad y compatibilidad entre plataformas y equipos industriales.",
    Icono: Layers,
  },
  {
    titulo: "Gestión de proyectos",
    texto: "Planeación, ejecución y seguimiento integral de proyectos de ingeniería.",
    Icono: ClipboardList,
  },
  {
    titulo: "Capacitación y entrenamiento",
    texto: "Formación técnica especializada para equipos de trabajo.",
    Icono: GraduationCap,
  },
];

export default function Complementarios() {
  return (
    <section className="border-t border-acero/20 bg-tecnico py-14">
      <Container>
        <Revelar className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.titulo} className="flex gap-4">
              <item.Icono aria-hidden="true" size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-azul" />
              <div>
                <h3 className="text-[17px] font-semibold text-grafito">
                  {item.titulo}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-acero">
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </Revelar>
      </Container>
    </section>
  );
}
