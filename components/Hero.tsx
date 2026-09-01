import Container from "./ui/Container";
import HeroCollage from "./HeroCollage";
import HeroTexto from "./HeroTexto";
import TrazoOnda from "./TrazoOnda";

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-grafito">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,color-mix(in_oklab,var(--color-blanco)_12%,transparent)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-azul/20 blur-[120px]"
      />

      <Container className="relative flex flex-1 flex-col justify-center gap-12 pb-0 pt-32 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
        <HeroTexto />
        <HeroCollage />
      </Container>
      <div className="relative mt-16 h-[220px] w-full" aria-hidden="true">
        <TrazoOnda />
      </div>
    </section>
  );
}
