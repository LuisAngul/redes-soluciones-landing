import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credenciales from "@/components/Credenciales";
import Servicios from "@/components/Servicios";
import FranjaMarcas from "@/components/FranjaMarcas";
import AlquilerEquipos from "@/components/AlquilerEquipos";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Nosotros from "@/components/Nosotros";
import Complementarios from "@/components/Complementarios";
import Cotizacion from "@/components/Cotizacion";
import Footer from "@/components/Footer";
import BotonWhatsApp from "@/components/BotonWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Credenciales />
        <Servicios />
        <FranjaMarcas />
        <AlquilerEquipos />
        <PorQueElegirnos />
        <Nosotros />
        <Complementarios />
        <Cotizacion />
      </main>
      <Footer />
      <BotonWhatsApp />
    </>
  );
}
