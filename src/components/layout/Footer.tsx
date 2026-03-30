"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Globe, Share2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-foreground text-background py-20 relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-0 right-0 p-12 opacity-5 font-display font-black text-9xl uppercase tracking-tighter select-none">
         DOVA
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex flex-col group">
              <span className="text-3xl font-display font-bold leading-none text-white uppercase group-hover:text-primary transition-colors">
                DOVA
              </span>
              <span className="text-[0.65rem] font-sans font-medium tracking-[0.2em] text-white/50 uppercase">
                SUPPLY
              </span>
            </Link>
            <p className="text-white/60 font-sans leading-relaxed">
              Conectando qualidade, eficiência e experiência para impulsionar seus projetos desde 1964.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/dovasupply" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram da DOVA Supply"
                className="p-3 bg-white/5 hover:bg-primary transition-colors rounded-sm"
              >
                 <Globe className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/dova-supply" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn da DOVA Supply"
                className="p-3 bg-white/5 hover:bg-primary transition-colors rounded-sm"
              >
                 <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Links Rápidos</h4>
            <div className="flex flex-col gap-4 text-white/60 font-medium">
               <Link href="#sobre" className="hover:text-white transition-colors">Sobre Nós</Link>
               <Link href="#produtos" className="hover:text-white transition-colors">Produtos</Link>
               <Link href="#qualidade" className="hover:text-white transition-colors">Certificações</Link>
               <Link href="#" className="hover:text-white transition-colors">Catálogo PDF</Link>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Contato e Localização</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white/60 font-medium">
               <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4 group">
                     <MapPin className="w-6 h-6 text-primary shrink-0 group-hover:translate-y-[-2px] transition-transform" />
                     <p className="leading-relaxed">
                        Rua Bela, Nº 71 • Loja A e B<br />
                        São Cristóvão • CEP 20930-381<br />
                        Rio de Janeiro • RJ
                     </p>
                  </div>
               </div>
               <div className="flex flex-col gap-4">
                  <a href="tel:+552136226888" className="flex items-center gap-4 group hover:text-white transition-colors">
                     <Phone className="w-6 h-6 text-primary shrink-0" />
                     <span>(21) 3622-6888</span>
                  </a>
                  <a href="mailto:vendas@dovasupply.com.br" className="flex items-center gap-4 group hover:text-white transition-colors">
                     <Mail className="w-6 h-6 text-primary shrink-0" />
                     <span>vendas@dovasupply.com.br</span>
                  </a>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-sm font-sans tracking-tight">
             © {new Date().getFullYear()} DOVA Supply. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
             Voltar ao topo <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
