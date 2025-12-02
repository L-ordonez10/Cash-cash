import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RequirementsSection() {
  return (
    <section id="requisitos" className="py-16 bg-background relative overflow-hidden">
      {/* Blue wave decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
          <path d="M150 0C50 100 0 200 50 300C100 400 150 500 100 600H500V0H150Z" fill="#0077B6" fillOpacity="0.1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0077B6] italic mb-4">Requisitos</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Consulta los documentos y requisitos necesarios para solicitar tu préstamo.
          <br />
          Los requisitos varían según si eres persona individual o jurídica.
        </p>

        {/* Persona Individual */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-center max-w-5xl mx-auto">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image src="/businessman-in-suit-illustration.jpg" alt="Persona Individual" fill className="object-contain" />
            </div>
            <h3 className="font-bold text-[#0077B6] mb-3">Persona Individual</h3>
            <Button className="bg-[#0077B6] hover:bg-[#005A8D] text-white rounded-full text-sm">
              Solicitar préstamo
            </Button>
          </div>
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Documento de identidad vigente (DPI)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Licencia de conducir vigente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Tarjeta de Circulación
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Título de propiedad del vehículo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Recibo de agua, luz o teléfono
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Persona Jurídica */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto bg-muted/30 rounded-2xl p-8">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image src="/businesswoman-professional-illustration.jpg" alt="Persona Jurídica" fill className="object-contain" />
            </div>
            <h3 className="font-bold text-[#0077B6] mb-3">Persona Jurídica</h3>
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full text-sm">
              Solicitar préstamo
            </Button>
          </div>
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Documento de identidad vigente del representante legal (DPI)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Licencia de conducir del representante legal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Tarjeta de Circulación
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Título de propiedad del vehículo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Patente de comercio
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Patente de Sociedad
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Acta y Registro de nombramiento vigente del Representante Legal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Escritura Pública
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Punto de Acta
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  RTU actualizado de la empresa y del Representante Legal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0077B6]">•</span>
                  Recibo de agua, luz o teléfono de la empresa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
