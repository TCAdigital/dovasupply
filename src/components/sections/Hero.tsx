"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-24 opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-1/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-sm bg-accent-1/10 text-accent-1 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Excelência desde 1964
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight text-foreground uppercase tracking-tight mb-8">
              Conectando <span className="text-primary">Qualidade</span> e Eficiência.
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl text-foreground/70 font-sans leading-relaxed mb-10 mx-auto md:mx-0">
              Referência na distribuição de cabos elétricos especializados para projetos navais, industriais e de alta complexidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <a
                href="#produtos"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-sm hover:bg-accent-1 transition-all active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              >
                <span>Ver Catalogo de Cabos</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#sobre"
                className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-all active:scale-95"
              >
                Nossa História
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-8 mt-16"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-sm">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-foreground">Qualidade Certificada</p>
                <p className="text-xs text-foreground/60">Normas Nacionais e Internacionais</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent-2/10 rounded-sm">
                <Zap className="w-6 h-6 text-accent-2" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-foreground">Pronta Entrega</p>
                <p className="text-xs text-foreground/60">Amplo estoque e logística ágil</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Component - Asymmetric & Layered */}
        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20 aspect-square md:aspect-auto md:h-[600px] w-full bg-muted rounded-sm overflow-hidden shadow-2xl group border-8 border-white dark:border-zinc-900"
          >
            {/* Placeholder for High-res Cable Photo */}
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
               {/* Aesthetic overlay text */}
               <span className="absolute -bottom-10 -right-10 text-[10rem] font-black text-black/5 dark:text-white/5 select-none uppercase tracking-tighter">
                 DOVA
               </span>
               <div className="relative z-10 p-12 text-center">
                  <div className="w-24 h-1 bg-primary mb-6 mx-auto" />
                  <p className="text-4xl font-display font-black text-foreground/20 italic">PHOTO: PREMIUM MARINE CABLE GALLERY</p>
                  <p className="text-sm mt-4 text-primary font-bold tracking-[0.2em]">60 ANOS DE EXPERIÊNCIA</p>
               </div>
            </div>
            {/* Layered overlay */}
            <div className="absolute top-12 left-12 p-6 bg-white/90 backdrop-blur-sm border-l-4 border-accent-1 shadow-xl z-30 hidden lg:block">
              <p className="text-xs font-bold text-foreground/50 tracking-widest uppercase mb-2">Linha Naval</p>
              <p className="text-2xl font-display font-bold text-primary">Cabos de Instrumentação</p>
            </div>
          </motion.div>
          
          {/* Backdrop Graphic Component */}
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/20 -z-10 translate-x-4 translate-y-4" />
        </div>
      </div>
    </section>
  );
}
