"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const URL_WHATSAPP =
  "https://wa.me/573016434302?text=" +
  encodeURIComponent("Hola, quiero cotizar un servicio.");

export default function BotonWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={URL_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-xl ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <MessageCircle aria-hidden="true" size={26} />
    </a>
  );
}
