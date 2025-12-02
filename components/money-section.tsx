import Image from "next/image"
import { Check, X } from "lucide-react"

export function MoneySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-[30px] md:text-[60px] lg:text-[100px] font-bold text-center text-[#FF6C00]  mb-12">Dinero en 3 horas</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#22C55E] rounded-full p-1">
                <Check className="w-4 h-4 text-white" />
              </span>
              <span className="bg-[#0077B6] text-white px-4 py-2 rounded-full text-sm font-medium">
                Modelos 2004 en adelante
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#EF4444] rounded-full p-1">
                <X className="w-4 h-4 text-white" />
              </span>
              <span className="bg-[#0077B6] text-white px-4 py-2 rounded-full text-sm font-medium">
                NO aceptamos motos
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#22C55E] rounded-full p-1">
                <Check className="w-4 h-4 text-white" />
              </span>
              <span className="bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-medium">
                Sin record crediticio
              </span>
            </div>
          </div>
          <div className="relative h-[250px] md:h-[300px]">
            <Image src="/white-modern-compact-suv-car.jpg" alt="Carro elegible" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
