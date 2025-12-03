import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RequirementsSection() {
  return (
    <section id="requisitos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* TÍTULO */}
        <h2 className="text-[40px] md:text-[60px] lg:text-[82px] font-bold text-center text-[#00AEEF] mb-4">
          Requisitos
        </h2>

        {/* TEXTO DESCRIPTIVO */}
        <p className="text-center text-[#363735] text-[14px] md:text-[16px] max-w-3xl mx-auto mb-12">
          Consulta los documentos y requisitos necesarios para solicitar tu préstamo.
          <br />
          Los requisitos varían según si eres persona individual o jurídica.
        </p>

        {/* PERSONA INDIVIDUAL */}
        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto mb-10">
          {/* Columna izquierda: imagen + texto + botón */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src="/imagenes/52.png" 
                alt="Persona Individual"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#363735] mb-3">
              Persona Individual
            </h3>
            <Button className="bg-[#99C137] hover:bg-[#8AB12F] text-white rounded-full px-8 py-2 text-sm font-semibold">
              Solicitar préstamo
            </Button>
          </div>

          {/* Columna derecha: listas */}
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4 text-[14px] md:text-[16px] text-[#363735]">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Documento de identidad vigente (DPI)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Licencia de conducir vigente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Tarjeta de Circulación</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Título de propiedad del vehículo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Recibo de agua, luz o teléfono</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA AZUL */}
        <div className="max-w-6xl mx-auto border-t border-[#00AEEF] my-8" />

        {/* PERSONA JURÍDICA */}
        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Columna izquierda: imagen + texto + botón */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src="/imagenes/pngegg.png" 
                alt="Persona Jurídica"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#363735] mb-3">
              Persona Jurídica
            </h3>
            <Button className="bg-[#99C137] hover:bg-[#8AB12F] text-white rounded-full px-8 py-2 text-sm font-semibold">
              Solicitar préstamo
            </Button>
          </div>

          {/* Columna derecha: listas */}
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4 text-[14px] md:text-[16px] text-[#363735]">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Documento de identidad vigente del representante legal (DPI)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Licencia de conducir del representante legal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Tarjeta de Circulación</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Título de propiedad del vehículo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Patente de comercio</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Patente de sociedad</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Acta y registro de nombramiento vigente del representante legal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Escritura Pública</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Punto de acta</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>RTU actualizado de la empresa y del representante legal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#00AEEF]">•</span>
                  <span>Recibo de agua, luz o teléfono de la empresa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
