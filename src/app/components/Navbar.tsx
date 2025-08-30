"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shell } from "lucide-react"
import { Button } from "./ui/Button"
import { cn } from "../lib/utils"


const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#playground", label: "Playground" },
  { href: "#resource", label: "Resource" },
]

export function RoundedNavbar() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="mx-auto mt-10 w-full max-w-5xl px-4 animate-fade-in-up">
      <div
        role="menubar"
        className={cn(
          "flex items-center justify-between gap-3",
          "rounded-full bg-stone-300 text-stone-950 pl-2 pr-2 py-2 md:pl-3 md:pr-3",
          "shadow-2xl shadow-black/20 drop-shadow-xl",
        )}
      >
        {/* Left: icon chip */}
        <Link href="/" className="items-center flex gap-2">
            <Shell className="h-6 w-6 text-stone-950 md:h-6 md:w-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-3xl font-mono">Weave</span>
        </Link>

        {/* Center: links */}
        <ul className="hidden md:flex items-center gap-8" role="menubar">
          {links.map((l) => {
            const isActive = pathname === l.href
            return (
              <li key={l.href} role="none">
                <Link
                  href={l.href}
                  role="menuitem"
                  className={cn(
                    "nav-underline text-base font-medium tracking-wide transition-colors duration-200",
                    isActive ? "text-white" : "text-white/90 hover:text-white",
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
          className="text-red-600 bg-white rounded-l-3xl rounded-r-3xl"
        >
          ih.com
        </Button>
      </div>
    </nav>
  )
}
