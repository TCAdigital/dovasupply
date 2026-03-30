"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Início", href: "#" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Produtos", href: "#produtos" },
  { name: "Qualidade", href: "#qualidade" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-border py-3 shadow-sm dark:bg-background/80"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="relative flex items-center group">
            <div className="relative h-10 w-32 md:h-12 md:w-40 mr-2">
              <Image 
                src="/logo.png" 
                alt="DOVA Supply Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col border-l border-primary/20 pl-3">
              <span className="text-xl md:text-2xl font-display font-black leading-none text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                DOVA
              </span>
              <span className="text-[0.6rem] font-sans font-bold tracking-[0.3em] text-foreground/40 uppercase">
                Supply
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+552136226888"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm font-medium hover:bg-accent-1 transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            <Phone className="w-4 h-4" />
            <span>Falar com Especialista</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-background z-40 md:hidden transition-all duration-300 transform",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col p-8 gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-semibold text-foreground/90"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+552136226888"
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-sm font-bold text-lg mt-4"
          >
            <Phone />
            <span>Ligar Agora</span>
          </a>
        </div>
      </div>
    </header>
  );
}
