import Image from "next/image"

export function MoneySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF5EC]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-extrabold text-[#FF6C00]
          text-[34px] md:text-[65px] lg:text-[100px] leading-tight mb-10">
          Dinero en 3 horas
        </h2>

        <div className="relative max-w-4xl mx-auto h-[260px] md:h-[320px] lg:h-[420px]">
          <Image
            src="/imagenes/Group-67.webp"
            alt="Carro elegible"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
