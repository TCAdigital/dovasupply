"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Award, Truck, Users, UserCheck, Building2, TrendingUp } from "lucide-react";

export function About() {
  return (
    <>
      {/* Stats Bar */}
      <section className="bg-gradient-to-br from-[#b45f31] to-[#ffa501] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, number: "60+", label: "Anos de Experiência" },
              { icon: Truck, number: "Pronta", label: "Entrega de Cabos" },
              { icon: Users, number: "5.000+", label: "Clientes Atendidos" },
              { icon: UserCheck, number: "Equipe", label: "Especializada" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-3xl md:text-4xl font-display font-black text-white mb-1">
                  {stat.number}
                </p>
                <p className="text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Infraestrutura DOVA Supply"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
                <p className="text-4xl font-display font-black text-primary">60+</p>
                <p className="text-sm text-foreground/60 font-medium">Anos no mercado</p>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-accent-1 font-bold text-sm tracking-[0.3em] uppercase mb-3">
                Quem Somos
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-6">
                Tradição e Inovação em Cabos Elétricos
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                Há mais de 60 anos oferecendo as melhores soluções em 
                condutores elétricos para projetos industriais em <span className="text-accent-2 font-bold italic">todo o Brasil</span>. 
                Nossa linha de produtos inclui cabos certificados de baixa e 
                média tensão, cabos para uso naval e em plataformas 
                petrolíferas, cabos para uso móvel em máquinas e equipamentos 
                da indústria de mineração, além de cabos de instrumentação 
                e controle. Com qualidade e expertise, garantimos soluções 
                elétricas que atendem aos mais altos padrões do mercado, 
                energizando projetos e conectando o futuro.
              </p>

              {/* Benefits list */}
              <div className="space-y-4 mb-8">
                {[
                  "Parceria com fabricantes líderes como Wirex, Cafiom e Telecam",
                  "Pronta entrega e distribuição para todo o Brasil",
                  "Assistência técnica especializada e consultoria",
                  "Produtos certificados conforme normas NBR e IEC",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-2/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-1" />
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className="btn-gold px-8 py-4 rounded-lg text-sm tracking-wide inline-flex items-center gap-2"
              >
                Conheça Nossa Equipe
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-1 font-bold text-sm tracking-[0.3em] uppercase mb-3">
              Por que a DOVA?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
              Nossos Diferenciais
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Infraestrutura Completa",
                description: "Ampla área para armazenagem e distribuição eficiente, garantindo agilidade em cada pedido.",
              },
              {
                icon: Users,
                title: "Equipe Especializada",
                description: "Profissionais com décadas de experiência prontos para assessorar suas necessidades técnicas.",
              },
              {
                icon: TrendingUp,
                title: "Agilidade na Entrega",
                description: "Logística otimizada com pronta entrega para as principais capitais e regiões do Brasil.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-2/10 flex items-center justify-center mb-6 group-hover:bg-accent-2/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent-1" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
