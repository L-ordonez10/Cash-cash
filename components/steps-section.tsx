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
      icon: "/iconos/Group.svg",
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
    <section id="como-funciona" className="py-16 mb-12 mt-12 bg-white">
      <div className="container mx-auto px-4">

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
              <div className="w-35 h-25 flex items-center justify-center">
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
                <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-bold text-[#363735] mb-2">
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
