import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#363735] pt-12 pb-6">
      <div className="container mx-auto px-4">

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo y descripción */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/iconos/LOGO.svg" alt="Logo" width={220} height={60} />
            </Link>
            <p className="text-white mt-4 md:text-[16px] lg:text-[18px] leading-tight">
              Pide un préstamo y recibe el
              <br />
              dinero en 3 horas
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4 md:text-[18px] lg:text-[20px]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="#como-funciona" className="hover:text-[#0077B6] md:text-[16px] lg:text-[18px]">
                  ¿Cómo Funciona?
                </Link>
              </li>
              <li>
                <Link href="#requisitos" className="hover:text-[#0077B6] md:text-[16px] lg:text-[18px]">
                  Requisitos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-[#0077B6] md:text-[16px] lg:text-[18px]">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0077B6] md:text-[16px] lg:text-[18px]">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4 md:text-[18px] lg:text-[20px]">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-white md:text-[14px] lg:text-[18px]">
              <li>+502 2227-4546</li>
              <li>ventas@cashcash.com.gt</li>
              <li>Zona 12, El Cortijo, Guatemala</li>
            </ul>
          </div>

          {/* Síguenos */}
          <div>
            <h4 className="font-semibold text-white mb-4 md:text-[18px] lg:text-[20px]">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/share/1adw3h87Pg/" className="w-12 h-12 flex items-center justify-center hover:bg-[#005A8D] transition-colors rounded-full">
                <Image src="/iconos/Vector(1).svg" alt="Facebook" width={30} height={25} />
              </Link>

              <Link href="https://www.tiktok.com/@cashcash.gt" className="w-12 h-12 flex items-center justify-center hover:bg-[#005A8D] transition-colors rounded-full">
                <Image src="/iconos/tiktok.svg" alt="TikTok" width={30} height={25} />
              </Link>

              <Link href="https://www.instagram.com/cashcash.gt/" className="w-12 h-12 flex items-center justify-center hover:bg-[#005A8D] transition-colors rounded-full">
                <Image src="/iconos/Vector(3).svg" alt="Instagram" width={30} height={25} />
              </Link>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="border-t border-white/20 mt-10 pt-4" />

        {/* TEXTO FINAL */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white text-xs opacity-80 mt-2">
          <p>
            © 2025 Cash Cash. Todos los derechos reservados.
          </p>

          <p className="mt-2 md:mt-0">
            Página diseñada y desarrollada en Guatemala por <span className="font-semibold">BOLD</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
