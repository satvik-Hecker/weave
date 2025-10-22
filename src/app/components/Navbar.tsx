"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shell, Menu, X } from "lucide-react"
import { Button } from "./ui/Button"
import { cn } from "../lib/utils"
import { useState } from "react"

const links = [
  { href: "#Features", label: "Features" },
  { href: "#How", label: "How?" },
  { href: "#Testimonials", label: "Testimonials" },
]

export function RoundedNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Primary"
      className="mx-auto max-w-4xl px-4 animate-fade-in-up w-full pt-8"
    >
      <div
        role="menubar"
        className={cn(
          "flex items-center justify-between",
          "rounded-4xl bg-[#F8F7FF] text-stone-950 px-4 py-4 md:px-6",
          "shadow-2xl shadow-black/20 drop-shadow-xl"
        )}
      >
        
        <Link href="/" className="group flex items-center gap-2">
          <Shell className="h-6 w-6 text-stone-950 transition-transform duration-300 group-hover:rotate-90" />
          <span className="text-2xl font-mono font-semibold">Weave</span>
        </Link>


        {/* Center: desktop links */}
        <ul className="hidden md:flex items-center gap-10" role="menubar">
          {links.map((l) => {
            const isActive = pathname === l.href
            return (
              <li key={l.href} role="none">
                <Link
                  href={l.href}
                  role="menuitem"
                  className={cn(
                    "nav-underline text-lg font-semibold tracking-wide transition-colors duration-200",
                    isActive
                      ? "text-stone-900"
                      : "text-stone-900 hover:text-stone-500"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right: button / mobile menu toggle */}
        <div className="flex items-center gap-3">
          <Button className="hidden md:inline-block text-[#F8F7FF] bg-stone-950 text-base font-semibold rounded-full font-mono px-5 py-2">
            Start Weaving
          </Button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-stone-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-3 rounded-3xl bg-[#F8F7FF] shadow-lg p-4 space-y-4">
          {links.map((l) => {
            const isActive = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "block text-lg font-semibold tracking-wide transition-colors duration-200",
                  isActive
                    ? "text-stone-900"
                    : "text-stone-900 hover:text-stone-500"
                )}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            )
          })}
          <Button className="w-full text-[#F8F7FF] bg-stone-950 text-base font-semibold  font-mono py-2">
            Start Weaving
          </Button>
        </div>
      )}
    </nav>
  )
}
