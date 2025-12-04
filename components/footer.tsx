import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#363735] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/iconos/LOGO.svg" alt="Logo" width={220} height={60} />
            </Link>
            <p className="text-white mt-4 md:text-[16px] lg:text-[18px]">
              Pide un préstamo y recibe el
              <br />
              dinero en 3 horas
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4 md:text-[18px] lg:text-[20px]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link
                  href="#como-funciona"
                  className="hover:text-[#0077B6] text-white md:text-[16px] lg:text-[18px]"
                >
                  ¿Cómo Funciona?
                </Link>
              </li>
              <li>
                <Link
                  href="#requisitos"
                  className="hover:text-[#0077B6] text-white md:text-[16px] lg:text-[18px]"
                >
                  Requisitos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0077B6] text-white md:text-[14px] lg:text-[18px]"
                >
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0077B6] text-white md:text-[16px] lg:text-[18px]"
                >
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
              {/* Facebook */}
              <Link
                href="#"
                className="w-12 h-12  rounded-full flex items-center justify-center hover:bg-[#005A8D] transition-colors"
              >
                <Image
                  src="/iconos/Vector(1).svg"
                  alt="Facebook"
                  width={30}
                  height={25}
                />
              </Link>

              {/* Twitter */}
              <Link
                href="#"
                className="w-12 h-12  rounded-full flex items-center justify-center hover:bg-[#005A8D] transition-colors"
              >
                <Image
                  src="/iconos/Vector(2).svg"
                  alt="Twitter"
                  width={30}
                  height={25}
                />
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="w-12 h-12  rounded-full flex items-center justify-center hover:bg-[#005A8D] transition-colors"
              >
                <Image
                  src="/iconos/Vector(3).svg"
                  alt="Instagram"
                  width={30}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
