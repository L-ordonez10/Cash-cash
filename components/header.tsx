import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3 flex mb-2 mt-2 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
         <Image src="/iconos/LOGOColor.svg" alt="Logo" width={250} height={60} />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#inicio" className="text-[20px] text-foreground text-[#363735] hover:text-[#0077B6] transition-colors">
            Inicio
          </Link>
          <Link href="#como-funciona" className="text-[20px] text-foreground hover:text-[#0077B6] transition-colors">
            ¿Cómo funciona?
          </Link>
          <Link href="#requisitos" className="text-[20px] text-foreground hover:text-[#0077B6] transition-colors">
            Requisitos
          </Link>
          <Button
            variant="outline"
            className="text-[20px] rounded-full bg-[#99C137]  border-[#99C137] text-[#363735] hover:bg-[#92b835]"
          >
            Contáctanos
          </Button>
        </nav>
      </div>
    </header>
  )
}
