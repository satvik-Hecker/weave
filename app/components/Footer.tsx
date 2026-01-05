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
          alt="footer background"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Headline */}
        <div className="mb-20 pt-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-footer-text md:text-3xl lg:text-4xl font-mono">
            Built with ❤️ for creators who <br /> just want to ship.
          </h2>
        </div>

        <div className="flex flex-col justify-between items-center gap-8 md:flex-row md:items-end font-mono">
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-semibold  text-footer-muted transition-colors hover:text-footer-hover"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-6 justify-center">
            <span className="text-lg font-semibold text-footer-muted">Stay in touch</span>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-footer-muted transition-colors  hover:text-footer-hover"
                >
                  <HugeiconsIcon icon={social.icon} size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
