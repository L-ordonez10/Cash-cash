import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
    >
      {/* IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagenes/banner.webp" 
          alt="Préstamos por tu vehículo"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* OVERLAY OSCURO PARA QUE EL TEXTO RESALTE */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* CONTENIDO */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 min-h-[550px] md:min-h-[780px] flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-[35px] md:text-[45px] lg:text-[72px] font-bold italic leading-tight mb-6">
              Te damos
              <br />
              dinero rápido
              <br />
              por tu carro.
            </h1>

            <p className="text-[18px] md:text-[22px] lg:text-[30px] mb-2 opacity-90">
              Obtén préstamos inmediatos sin papeleo complicado.
            </p>

            <p className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold mb-8">
              Aprobación garantizada en 3 horas.
            </p>

            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white text-[20px] lg:text-[24px] px-16 py-5 font-semibold shadow-lg">
              ¡Solicita ahora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
