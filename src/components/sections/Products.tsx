"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, Gauge, Zap, Share2, Thermometer, ShieldCheck, Package, ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Cabos de Instrumentação",
    description: "Transmissão de sinais analógicos e digitais com máxima precisão e confiabilidade.",
    label: "Precisão",
    icon: Gauge,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cabos de Controle",
    description: "Ideal para automação industrial, medição e comando de equipamentos.",
    label: "Automação",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1581093191147-73d7ade45d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cabos de Energia",
    description: "Alta confiabilidade para distribuição elétrica em baixa e média tensão.",
    label: "Potência",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Protocolos de Comunicação",
    description: "Conectividade robusta para Fieldbus, Profibus e redes industriais avançadas.",
    label: "Redes",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cabos Termopar",
    description: "Próprios para extensão e compensação de sensores de temperatura críticos.",
    label: "Térmico",
    icon: Thermometer,
    image: "https://images.unsplash.com/photo-1621905235215-60ba840d5885?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cabo Naval",
    description: "Certificados para máxima durabilidade em ambientes marítimos e offshore.",
    label: "Certificado",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Outros Produtos",
    description: "Linha completa de condutores e acessórios especializados para sua indústria.",
    label: "Soluções",
    icon: Package,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-1 font-bold text-sm tracking-[0.3em] uppercase mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Trabalhamos com fabricantes líderes para entregar produtos que atendem rigorosas normas nacionais e internacionais.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden h-80 cursor-pointer"
            >
              {/* Card Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Label */}
              <div className="absolute top-4 left-4">
                <span className="bg-accent-2 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {product.label}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {product.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contato"
            className="btn-gold px-8 py-4 rounded-lg text-sm tracking-wide inline-flex items-center gap-2"
          >
            Consultar Catálogo Completo <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
