import Container from "./ui/Container";
import HeroTexto from "./HeroTexto";
import TrazoOnda from "./TrazoOnda";
import { ImageStreamHero } from "./ui/image-stream-hero";

const IMAGENES_HERO = [
  {
    src: "/hero/gabinete.jpg",
    alt: "Gabinete de control industrial con módulos de automatización",
  },
  {
    src: "/hero/linea-produccion.jpg",
    alt: "Línea de producción automatizada con panel de control HMI",
  },
  {
    src: "/hero/instrumentacion.jpg",
    alt: "Instrumentación industrial de medición de flujo",
  },
  {
    src: "/hero/torres-accent.jpg",
    alt: "Torres de transmisión eléctrica de alta tensión al atardecer",
  },
  {
    src: "/hero/automatizacion-digital.jpg",
    alt: "Ingeniero supervisando automatización industrial con tablet y datos en tiempo real",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grafito">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,color-mix(in_oklab,var(--color-blanco)_12%,transparent)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-azul/20 blur-[120px]"
      />

      <Container className="relative pt-24">
        <ImageStreamHero
          images={IMAGENES_HERO}
          className="h-[520px] w-full sm:h-[600px] lg:h-[720px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-grafito/75 via-transparent to-grafito/80"
          />
          <HeroTexto />
        </ImageStreamHero>
      </Container>

      <div className="relative mt-16 h-[220px] w-full" aria-hidden="true">
        <TrazoOnda />
      </div>
    </section>
  );
}
