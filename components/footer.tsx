import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[#0077B6]">CASH</span>
              <span className="text-2xl font-bold text-[#F97316]">CASH</span>
            </Link>
            <p className="text-xs text-muted-foreground mb-2">Préstamos inmediatos por tu vehículo</p>
            <p className="text-xs text-muted-foreground">
              Pide un préstamo y recibe el
              <br />
              dinero en 3 horas
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#como-funciona" className="hover:text-[#0077B6]">
                  ¿Cómo Funciona?
                </Link>
              </li>
              <li>
                <Link href="#requisitos" className="hover:text-[#0077B6]">
                  Requisitos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0077B6]">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0077B6]">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+502 2227-4546</li>
              <li>ventas@cashcash.com.gt</li>
              <li>Zona 12, El Cortijo, Guatemala</li>
            </ul>
          </div>

          {/* Síguenos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-[#0077B6] rounded-full flex items-center justify-center text-white hover:bg-[#005A8D] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#0077B6] rounded-full flex items-center justify-center text-white hover:bg-[#005A8D] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#0077B6] rounded-full flex items-center justify-center text-white hover:bg-[#005A8D] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
