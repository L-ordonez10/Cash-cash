import Image from "next/image"

export function StepsSection() {
  const steps = [
    {
      icon: "/iconos/Group1.svg",
      title: "Completa los requisitos",
      description:
        "Trae tu vehículo y la documentación requerida a nuestras oficinas. Nuestro equipo verificará que todo esté en orden.",
    },
    {
      icon: "/iconos/hojita.svg",
      title: "Llena Tu Solicitud",
      description:
        "Completa un formulario simple con tus datos personales y sobre el vehículo. Toma menos de 5 minutos.",
    },
    {
      icon: "/iconos/Group32.svg",
      title: "Recibe Tu Dinero",
      description:
        "Una vez aprobada tu solicitud, emitiremos un cheque 'NO NEGOCIABLE' a tu nombre en máximo 3 horas.",
    },
  ]

  return (
    <section
      id="como-funciona"
      className="relative py-16 mb-2 mt-12  h-[460px] bg-white"
    >
      {/* 🔵 Onda azul pegada al fondo (encima del fondo gris) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[510px] z-0">
        <Image
          src="/imagenes/Maskgroup.webp"
          alt="Fondo cómo funciona"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* CONTENIDO */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                bg-[#EDEDED]
                rounded-2xl 
                shadow-lg 
                p-8 
                flex-1 
                min-w-[350px] 
                max-w-[550px] 
                flex 
                items-center 
                gap-6 
                hover:shadow-xl 
                transition-shadow
              "
            >
              {/* ICONO */}
              <div className="w-[150px] flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* TEXTO */}
              <div className="text-left">
                <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-bold text-[#363735] mb-2 leading-none">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#4A4A4A] leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
