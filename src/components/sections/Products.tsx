"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, Smartphone, Waves, Zap, Settings, ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "Uso Naval",
    description: "Cabos projetados para suportar as duras condições de ambientes marítimos, com alta resistência à corrosão.",
    icon: Anchor,
    colorClass: "bg-[#b45f31]",
  },
  {
    title: "Uso Móvel",
    description: "Flexibilidade e durabilidade para aplicações que exigem movimentação constante e resistência mecânica.",
    icon: Smartphone,
    colorClass: "bg-[#72553f]",
  },
  {
    title: "Controle",
    description: "Precisão na transmissão de sinais de comando para sistemas automatizados e maquinário industrial.",
    icon: Settings,
    colorClass: "bg-[#9c6c31]",
  },
  {
    title: "Instrumentação",
    description: "Proteção total contra interferências eletromagnéticas para garantir a acuracidade de medições.",
    icon: Waves,
    colorClass: "bg-[#ffa501]",
  },
  {
    title: "Potência",
    description: "Soluções robustas para distribuição de energia em diversos níveis de tensão com total segurança.",
    icon: Zap,
    colorClass: "bg-zinc-200",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-accent-1 tracking-[0.3em] uppercase mb-4">Portfólio</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black text-foreground uppercase mb-6 tracking-tight">
              Vitrine de Especialidades
            </h3>
            <div className="w-20 h-1 bg-primary mb-8 mx-auto" />
            <p className="max-w-2xl text-lg text-foreground/60 font-sans mx-auto">
              Trabalhamos com fabricantes líderes para entregar produtos que atendem rigorosas normas nacionais e internacionais.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-zinc-900 border border-border p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Card visual detail */}
              <div 
                className={cn(
                  "absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-12 -translate-y-12 rotate-45 group-hover:opacity-10 transition-all duration-500",
                  product.colorClass
                )}
              />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-muted rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h4 className="text-2xl font-display font-black text-foreground uppercase mb-4 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h4>
                
                <p className="text-foreground/60 leading-relaxed font-sans mb-8">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-1.5 text-xs font-bold text-primary tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                      Solicitar Orçamento <ArrowUpRight className="w-4 h-4" />
                   </div>
                   <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <ShieldCheck className="w-4 h-4 text-foreground/30 group-hover:text-white" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: products.length * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 bg-primary text-white text-center rounded-sm hover:translate-y-[-4px] transition-all duration-300 shadow-xl shadow-primary/20"
          >
             <h4 className="text-3xl font-display font-black uppercase mb-4 leading-none">Precisa de Dimensionamento?</h4>
             <p className="text-white/80 font-sans mb-8">Nossa equipe técnica auxilia na especificação exata para seu projeto.</p>
             <a 
               href="#contato"
               className="px-8 py-3 bg-white text-primary font-bold rounded-sm hover:bg-accent-2 hover:text-white transition-all uppercase text-sm tracking-wider"
             >
               Consultar Especialistas
             </a>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Visual placeholders for certificates/brands */}
           <div className="text-xs font-bold uppercase tracking-[0.3em]">Qualidade Garantida</div>
           <div className="text-xs font-bold uppercase tracking-[0.3em]">Normas NBR / ISO</div>
           <div className="text-xs font-bold uppercase tracking-[0.3em]">Líderes de Mercado</div>
           <div className="text-xs font-bold uppercase tracking-[0.3em]">Certificação Premium</div>
        </div>
      </div>
    </section>
  );
}
