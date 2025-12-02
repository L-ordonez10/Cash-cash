import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function DoubtSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Tienes dudas sobre
              <br />
              los requisitos?
            </h2>
            <p className="text-muted-foreground">
              Nuestro equipo está disponible para ayudarte a<br />
              verificar tu documentación.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-6 py-6 text-lg flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Contactar por WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white rounded-full px-6 py-6 text-lg flex items-center gap-3 bg-transparent"
            >
              <Phone className="w-6 h-6" />
              Llamar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
