"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="pt-20 pb-20 bg-[#FF6C00] " id="contacto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* LEFT SIDE */}
          <div className="text-white">
            <h2 className="text-3xl md:text-[45px] lg:text-[70px] font-bold mb-4 leading-tight">
              ¿Necesitas
              <br />
              dinero rápido?
            </h2>

            <p className="mb-1 font-semibold text-[18px] lg:text-[20px]">Ponte en contacto hoy.</p>
            <p className="mb-8 opacity-90 text-[18px] lg:text-[20px]">Nuestro equipo responde en menos de una hora.</p>

            {/* CONTACT BOXES */}
            <div className="space-y-4">

              {/* Caja 1 */}
              <div className="flex items-center gap-4 bg-[#EFEFEF] rounded-xl p-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image src="/iconos/telefono.svg" alt="Teléfono" width={24} height={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#363735] text-[20px]">Llamada Directa</p>
                  <p className="text-[#363735] text-[18px]">+502 2227-4546</p>
                </div>
              </div>

              {/* Caja 2 */}
              <div className="flex items-center gap-4 bg-[#EFEFEF] rounded-xl p-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image src="/iconos/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#363735] text-[20px]">WhatsApp</p>
                  <p className="text-[#363735] text-[18px]">+502 2227-4549</p>
                </div>
              </div>

              {/* Caja 3 */}
              <div className="flex items-center gap-4 bg-[#EFEFEF] rounded-xl p-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image src="/iconos/icon.svg" alt="Email" width={24} height={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#363735] text-[20px]">Email</p>
                  <p className="text-[#363735] text-[18px]">ventas@cashcash.com.gt</p>
                </div>
              </div>

              {/* Caja 4 */}
              <div className="flex items-center gap-4 bg-[#EFEFEF] rounded-xl p-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image src="/iconos/iconubi.svg" alt="Ubicación" width={24} height={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#363735] text-[20px]">Ubicación</p>
                  <p className="text-[#363735] text-[18px]">Calzada Atanasio Tzul 19-97</p>
                  <p className="text-[#363735]/80 text-[14px]">Zona 12, El Cortijo, Guatemala</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-background rounded-2xl p-8 shadow-xl">
            <form className="space-y-8">
              
              <div>
                <Label htmlFor="nombre" className="text-foreground mb-2 md:text-[18px] lg:text-[20px]">
                  Nombre completo *
                </Label>
                <Input id="nombre" placeholder="Tu nombre" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="telefono" className="text-foreground mb-2 md:text-[18px] lg:text-[20px]">
                  Teléfono *
                </Label>
                <Input id="telefono" placeholder="+ 502 5XXX-XXXX" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground mb-2 md:text-[18px] lg:text-[20px]">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="tu@email.com" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="vehiculo" className="text-foreground mb-3 md:text-[18px] lg:text-[20px]">
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
                <Label htmlFor="mensaje" className="text-foreground mb-3 md:text-[18px] lg:text-[20px]">
                  Mensaje
                </Label>
                <Textarea id="mensaje" placeholder="Cuéntanos más sobre tu situación..." className="mt-1 h-30" />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1A9CD9] hover:bg-[#EA580C] text-white rounded py-6 text-[20px] font-semibold mt-3"
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
