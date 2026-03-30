"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Quem Somos", href: "#sobre" },
  { name: "Produtos", href: "#produtos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className={`bg-dark text-white text-xs transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'py-2 opacity-100'}`}>
        <div className="container mx-auto px-6 flex justify-end items-center gap-6">
          <a href="tel:+552136226888" className="flex items-center gap-1.5 hover:text-accent-2 transition-colors">
            <Phone className="w-3 h-3" /> 21 3622-6888
          </a>
          <a href="mailto:vendas@dovasupply.com.br" className="flex items-center gap-1.5 hover:text-accent-2 transition-colors">
            <Mail className="w-3 h-3" /> vendas@dovasupply.com.br
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-28 md:h-12 md:w-36">
              <Image
                src="/logo.png"
                alt="DOVA Supply"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-2 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-gold px-6 py-2.5 rounded-lg text-sm tracking-wide"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-foreground/80 hover:text-primary py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-gold px-6 py-3 rounded-lg text-sm tracking-wide text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
