import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DoubtSection() {
  return (
    <section className="py-16 bg-[#EDEDED]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">

          {/* TEXTOS */}
          <div className="text-center md:text-left">
            <h2 className="text-[30px] md:text-[35px] lg:text-[65px] font-extrabold text-[#143B4D] leading-none mb-3">
              ¿Tienes dudas sobre<br />los requisitos?
            </h2>
            <p className="text-[#363735] text-[16px] md:text-[26px] lg:text-[30px]">
              Nuestro equipo está disponible para ayudarte a<br />
              verificar tu documentación.
            </p>
          </div>

          {/* BOTONES */}
          <div className="flex flex-col items-center md:items-start gap-4">

            {/* BOTÓN WHATSAPP */}
            <Button className="w-full md:w-[320px] bg-[#27D045] hover:bg-[#22b73a] text-white rounded px-8 py-6 text-[18px] font-semibold flex items-center justify-start gap-3 shadow-md">
              <Image
                src="/iconos/Vector.svg"
                alt="WhatsApp"
                width={26}
                height={26}
              />
              Contactar por WhatsApp
            </Button>

            {/* BOTÓN LLAMADA */}
            <Button className="w-full md:w-[320px] bg-[#F97316] hover:bg-[#e26512] text-white rounded px-8 py-6 text-[18px] font-semibold flex items-center justify-start gap-3 shadow-md">
              <Image
                src="/iconos/tel.svg"
                alt="Llamar"
                width={26}
                height={26}
              />
              Llamar ahora
            </Button>



          </div>
        </div>
      </div>
    </section>
  )
}