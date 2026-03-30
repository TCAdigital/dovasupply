"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Clock, Award } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with slow zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent-2 font-bold text-sm tracking-[0.3em] uppercase mb-6"
          >
            Excelência em Cabos Elétricos desde 1964
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-6"
          >
            Especialistas em{" "}
            <span className="text-accent-2">Distribuição</span> Ágil e
            Soluções Personalizadas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed"
          >
            Cabos navais, móveis, de controle, instrumentação e potência com
            qualidade certificada, infraestrutura de 2.000 m² e pronta entrega
            para todo o Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contato"
              className="btn-gold px-8 py-4 rounded-lg text-sm tracking-wide inline-flex items-center gap-2"
            >
              Solicitar Orçamento <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#produtos"
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg text-sm tracking-wide hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              Ver Produtos
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: ShieldCheck, text: "Qualidade Certificada" },
              { icon: Clock, text: "Pronta Entrega" },
              { icon: Award, text: "60+ Anos de Experiência" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full"
              >
                <badge.icon className="w-4 h-4 text-accent-2" />
                <span className="text-xs font-semibold text-white/90">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#produtos" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
