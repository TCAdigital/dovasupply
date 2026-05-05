"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Partnerships Section */}
      <section id="parceiros" className="bg-white py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent-2 font-bold text-sm tracking-[0.3em] uppercase mb-3">
              Nossas Parcerias
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground">
              Trabalhamos com os Melhores
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
            {[
              { name: "Poliron", url: "https://poliron.com.br", logo: "/images/partners/poliron.png" },
              { name: "Cofibam", url: "https://www.cofibam.com.br", logo: "/images/partners/cofibam.png" },
              { name: "Dacota", url: "https://dacotace.com.br", logo: "/images/partners/dacota.png" },
              { name: "Condvolt", url: "https://www.condvolt.com.br", logo: "/images/partners/condvolt.png" },
              { name: "Pan Eletric", url: "https://www.pan.com.br", logo: "/images/partners/paneletric.png" },
              { name: "Telecam", url: "https://www.telecamcabos.com.br", logo: "/images/partners/telecam.png" },
              { name: "Conduferes", url: "https://www.conduferes.com.br", logo: "/images/partners/conduferes.png" },
              { name: "Datalink", url: "https://www.afdatalink.com.br", logo: "/images/partners/datalink.png" },
              { name: "Induscabos", url: "https://www.induscabos.com.br", logo: "/images/partners/induscabos.png" },
              { name: "Cabelauto", url: "https://www.cabelauto.com.br", logo: "/images/partners/cabelauto.png" },
              { name: "Cobremack", url: "#", logo: "/images/partners/cobremack.png" },
              { name: "Conduspar", url: "#", logo: "/images/partners/conduspar.png" },
              { name: "Cobrecom", url: "https://www.cobrecom.com.br", logo: "/images/partners/cobrecom.png" },
              { name: "Nambei", url: "https://www.nambei.com.br", logo: "/images/partners/nambei.png" },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center transition-all duration-500"
              >
                <div className="px-4 py-4 bg-white rounded-xl w-full h-24 flex items-center justify-center border border-border group-hover:border-accent-2/30 group-hover:shadow-xl transition-all">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-foreground/40 font-display font-black text-xs tracking-tighter group-hover:text-primary transition-colors text-center">
                      {partner.name.toUpperCase()}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="bg-dark py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact info */}
            <div className="text-white">
              <p className="text-accent-2 font-bold text-sm tracking-[0.3em] uppercase mb-3">
                Fale Conosco
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-black mb-8">
                Entre em Contato
              </h2>

              <div className="space-y-6">
                <a href="tel:+552136226888" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent-2/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent-2" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Telefone</p>
                    <p className="text-xl font-bold text-white">(21) 3622-6888</p>
                  </div>
                </a>

                <a href="mailto:vendas@dovasupply.com.br" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent-2/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent-2" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">E-mail</p>
                    <p className="text-lg font-semibold text-white">vendas@dovasupply.com.br</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-2" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Endereço</p>
                    <p className="text-white font-medium">
                      São Cristóvão, Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-8">
                <a
                  href="https://instagram.com/dovasupply"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-2/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/dova-supply"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-2/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Solicite um Orçamento
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-accent-2/50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-1.5">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-accent-2/50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-accent-2/50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Descreva o que precisa..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-accent-2/50 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-lg text-sm tracking-wide font-bold"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo / About */}
            <div>
              <div className="mb-4">
                <span className="text-2xl font-display font-black text-accent-2 uppercase">DOVA</span>
                <span className="text-sm font-sans text-white/40 ml-1">Supply</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Conectando qualidade, eficiência e experiência desde 1964. Distribuidora de cabos elétricos especializados.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/80">Navegação</h4>
              <div className="space-y-2">
                {["Início", "Quem Somos", "Produtos", "Diferenciais", "Contato"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block text-white/50 hover:text-accent-2 text-sm transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/80">Produtos</h4>
              <div className="space-y-2">
                {["Cabos Navais", "Cabos Móveis", "Controle", "Instrumentação", "Potência"].map((item) => (
                  <p key={item} className="text-white/50 text-sm">{item}</p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/80">Contato</h4>
              <div className="space-y-2 text-white/50 text-sm">
                <p>(21) 3622-6888</p>
                <p>vendas@dovasupply.com.br</p>
                <p>São Cristóvão, Rio de Janeiro - RJ</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-white/30 text-sm">
                © {new Date().getFullYear()} DOVA Supply. Todos os direitos reservados.
              </p>
              <p className="text-white/20 text-[10px] tracking-wider uppercase">
                Desenvolvido com amor ❤️ pela{" "}
                <a 
                  href="https://tcadigital.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-2 transition-colors"
                >
                  TCA Digital Ai-Driven
                </a>
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-2/20 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
