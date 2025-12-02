import Image from "next/image"

export function BenefitsSection() {
  const benefits = [
    {
      image: "/imagenes/tarjeta.png",
      title: "Sin récord crediticio",
    },
    {
      image: "/imagenes/RELOJWEB.png",
      title: "Precalificación en solo 3 horas",
    },
    {
      image: "/imagenes/alcancia.png",
      title: "Interés sobre saldo",
    },
    {
      image: "/imagenes/billeteraweb.png",
      title: "Abono a capital",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">

        <h2 className="text-[40px] md:text-[60px] lg:text-[82px] font-bold text-center text-[#1A9CD9] mb-12">
          Beneficios
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-2xl p-6 flex flex-col items-center justify-between text-center shadow-sm"
            >
              {/* Imagen */}
              <div className="relative w-40 h-32 mb-4 flex items-center justify-center">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Texto dentro del cuadro */}
              <p className="text-[16px] md:text-[20px] lg:text-[26px] font-medium text-[#143B4D]">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
