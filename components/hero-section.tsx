import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-[#006A9E] via-[#0088B8] to-[#00A5C4] overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white z-10">
            <h1 className="text-[35px] md:text-[45px] lg:text-[72px] font-bold italic leading-tight mb-6">
              Te damos
              <br />
              dinero rápido
              <br />
              por tu carro.
            </h1>
            <p className="text-[18px] md:text-[22px] lg:text-[35px] mb-2 opacity-90">
              Obtén préstamos inmediatos
              sin papeleo complicado.
            </p>
            <p className="text-[18px] md:text-[22px] lg:text-[28px] font-semibold mb-8">Aprobación garantizada en 3 horas.</p>
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white text-[18px] md:text-[20px] lg:text-[28px] px-24 py-8  font-semibold shadow-lg">
              ¡Solicita ahora!
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/blue-suv-car-with-money-flying-around-it.jpg"
              alt="Carro con dinero"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
