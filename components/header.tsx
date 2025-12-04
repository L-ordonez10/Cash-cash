"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Image src="/iconos/LOGOColor.svg" alt="Logo" width={220} height={60} />
        </Link>

        {/* NAV DESKTOP (solo en pantallas grandes) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="#inicio"
            className="text-[18px] lg:text-[20px] text-[#363735] hover:text-[#0077B6] transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#como-funciona"
            className="text-[18px] lg:text-[20px] text-foreground hover:text-[#0077B6] transition-colors"
          >
            ¿Cómo funciona?
          </Link>
          <Link
            href="#requisitos"
            className="text-[18px] lg:text-[20px] text-foreground hover:text-[#0077B6] transition-colors"
          >
            Requisitos
          </Link>
          <Button
            variant="outline"
            className="text-[18px] lg:text-[20px] rounded-[13px] bg-[#99C137] border-[#99C137] text-[#363735] hover:bg-[#92b835] py-5 px-6"
          >
            Contáctanos
          </Button>
        </nav>

        {/* BOTÓN MENÚ HAMBURGUESA (móvil + tablet) */}
        <button
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-border"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* NAV MOBILE + TABLET */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <Link
              href="#inicio"
              className="text-[16px] text-[#363735] hover:text-[#0077B6] transition-colors"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              href="#como-funciona"
              className="text-[16px] text-foreground hover:text-[#0077B6] transition-colors"
              onClick={closeMenu}
            >
              ¿Cómo funciona?
            </Link>
            <Link
              href="#requisitos"
              className="text-[16px] text-foreground hover:text-[#0077B6] transition-colors"
              onClick={closeMenu}
            >
              Requisitos
            </Link>
            <Button
              variant="outline"
              className="mt-2 w-full rounded-full bg-[#99C137] border-[#99C137] text-[#363735] hover:bg-[#92b835]"
              onClick={closeMenu}
            >
              Contáctanos
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
