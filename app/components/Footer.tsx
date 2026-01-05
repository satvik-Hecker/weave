"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github, Linkedin, Twitter } from "@hugeicons/core-free-icons";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "#" },
    { label: "Support", href: "#" },
  ];

  const socialLinks = [
    { label: "Github", href: "#", icon: Github },
    { label: "Linkedin", href: "#", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/backgrounds/footer-img.jpg"
          alt="Footer background"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content wrapper */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-6">
        {/* Headline */}
        <div className="mb-20 text-center">
          <h2 className="font-mono text-2xl font-bold tracking-tight text-footer-text md:text-3xl lg:text-4xl">
            Built with ❤️ for creators who
            <span className="block">just want to ship.</span>
          </h2>
        </div>

        {/* Glass container */}
        <div className="mx-auto w-full rounded-2xl  bg-white/5 backdrop-blur-xl shadow-xl px-8 py-8 md:px-14 md:py-12">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center font-mono">
            
            {/* Navigation (left) */}
            <nav className="flex flex-col items-center gap-2 md:items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-semibold text-footer-muted transition-colors hover:text-slate-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Socials (right) */}
            <div className="flex flex-col items-center gap-3 md:ml-auto md:items-end">
              <span className="text-lg text-footer-muted">
                Stay in touch
              </span>

              <div className="flex items-center justify-center gap-9 md:justify-end">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-footer-muted transition-colors hover:text-slate-400"
                  >
                    <HugeiconsIcon
                      icon={social.icon}
                      size={22}
                      strokeWidth={2.2}
                    />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
