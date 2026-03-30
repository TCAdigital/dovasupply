"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Building2, Users2, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Anos de Tradição", value: "60+", icon: History },
  { label: "M² de Infraestrutura", value: "2.000", icon: Building2 },
  { label: "Qualidade de Entrega", value: "100%", icon: ShieldCheck },
  { label: "Especialistas", value: "Equipe", icon: Users2 },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white dark:bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent-2/10 rounded-full blur-xl" />
             <div className="relative z-10 p-1 bg-muted border border-border shadow-2xl">
                {/* Visual Placeholder for Infrastructure/Team Photo */}
                <div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center p-12 text-center overflow-hidden">
                   <div className="w-12 h-1 bg-primary mb-6 mx-auto" />
                   <p className="text-3xl font-display font-black text-foreground/20 italic">INFRAESTRUTURA: 2.000m² DE ESTOQUE E LOGÍSTICA</p>
                   <p className="text-xs mt-4 text-primary font-bold tracking-[0.2em] uppercase">SÃO CRISTÓVÃO, RJ</p>
                </div>
             </div>
             {/* Offset Border Graphic */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 -z-10" />
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-accent-1 tracking-[0.3em] uppercase mb-4">Quem Somos</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-foreground uppercase mb-10 leading-tight">
                Conectando <span className="text-primary italic">experiência</span> para impulsionar seus projetos.
              </h3>
              
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-sans">
                <p>
                  Desde 1964, a <span className="font-bold text-foreground">DOVA Supply</span> é referência na distribuição de cabos elétricos, oferecendo soluções ágeis e personalizadas para diversos setores.
                </p>
                <p>
                  Com uma infraestrutura de 2.000 m² e um amplo estoque, garantimos pronta entrega, corte preciso e separação rápida para atender às necessidades dos nossos clientes. Trabalhamos exclusivamente com fabricantes líderes, entregando produtos que seguem rigorosas normas nacionais e internacionais de qualidade e segurança.
                </p>
                <p>
                  Nossa equipe altamente capacitada está preparada para oferecer suporte técnico especializado, auxiliando na especificação e dimensionamento dos cabos para cada aplicação.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-16">
                 {stats.map((stat, idx) => (
                   <div key={idx} className="group hover:translate-y-[-4px] transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                         <stat.icon className="w-5 h-5 text-primary" />
                         <span className="text-2xl font-display font-black text-foreground">{stat.value}</span>
                      </div>
                      <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{stat.label}</p>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
