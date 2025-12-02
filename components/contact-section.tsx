"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 bg-[#F97316]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left side - Info */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas
              <br />
              dinero rápido?
            </h2>
            <p className="mb-2 font-semibold">Ponte en contacto hoy.</p>
            <p className="mb-8 opacity-90">Nuestro equipo responde en menos de una hora.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Llamada Directa</p>
                  <p className="text-sm opacity-90">+502 2227-4546</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-90">+502 2227-4549</p>
                  <p className="text-xs opacity-75">Haz clic y escribe hoy mismo</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-90">ventas@cashcash.com.gt</p>
                  <p className="text-xs opacity-75">Respuesta en 24 hrs</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-sm opacity-90">Calzada Atanasio Tzul 19-97</p>
                  <p className="text-xs opacity-75">Zona 12, El Cortijo, Guatemala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-background rounded-2xl p-8 shadow-xl">
            <form className="space-y-4">
              <div>
                <Label htmlFor="nombre" className="text-foreground">
                  Nombre completo *
                </Label>
                <Input id="nombre" placeholder="Tu nombre" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="telefono" className="text-foreground">
                  Teléfono *
                </Label>
                <Input id="telefono" placeholder="+ 502 5XXX-XXXX" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="tuemail.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="vehiculo" className="text-foreground">
                  Tipo de vehículo
                </Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedán</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="pickup">Pickup</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="mensaje" className="text-foreground">
                  Mensaje
                </Label>
                <Textarea id="mensaje" placeholder="Cuéntanos más sobre tu situación..." className="mt-1" rows={3} />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-6 text-lg font-semibold"
              >
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
