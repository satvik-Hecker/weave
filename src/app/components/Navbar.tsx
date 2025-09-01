"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shell } from "lucide-react"
import { Button } from "./ui/Button"
import { cn } from "../lib/utils"


const links = [
  { href: "#Features", label: "Features" },
  { href: "#How", label: "How?" },
  { href: "#Testimonials", label: "Testimonials" },
]



export function RoundedNavbar() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="mt-0 mx-auto w-4xl max-w-6xl px-4 animate-fade-in-up">
      <div
        role="menubar"
        className={cn(
          "flex items-center justify-between gap-3",
          "rounded-4xl bg-[#F8F7FF] text-stone-950 pl-2 pr-2 py-3 md:pl-3 md:pr-3",
          "shadow-2xl shadow-black/20 drop-shadow-xl",
        )}
      >
        {/* Left: icon chip */}
        <Link href="/" className="items-center flex gap-2">
            <Shell className="h-6 w-6 text-stone-950 md:h-6 md:w-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-3xl font-mono font-semibold">Weave</span>
        </Link>
        
        {/* Center: links */}
        <ul className="hidden md:flex items-center gap-16" role="menubar">
          {links.map((l) => {
            const isActive = pathname === l.href
            return (
              <li key={l.href} role="none">
                <Link
                  href={l.href}
                  role="menuitem"
                  className={cn(
                    "nav-underline text-xl font-semibold tracking-wide transition-colors duration-200",
                    isActive ? "text-stone-900" : "text-stone-900 hover:text-stone-500",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        
        <Button
          className="text-[#F8F7FF] bg-stone-950 text-lg font-semibold rounded-l-4xl rounded-r-4xl font-mono "
        >
          Start Weaving
        </Button>
        
      </div>
    </nav>
  )
}
