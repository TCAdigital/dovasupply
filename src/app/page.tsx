import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        {/* Seção de Qualidade (CTA Final) */}
        <section id="qualidade" className="py-24 bg-primary text-white overflow-hidden relative">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
           <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 tracking-tight">
                 Pronto para elevar o padrão do seu projeto?
              </h2>
              <p className="max-w-3xl text-xl text-white/80 font-sans mb-12 mx-auto">
                 Conte com a experiência de quem é referência no mercado de cabos elétricos há mais de seis décadas. Soluções personalizadas e pronta entrega.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a 
                   href="mailto:vendas@dovasupply.com.br"
                   className="px-10 py-5 bg-white text-primary font-bold rounded-sm hover:bg-accent-2 hover:text-white transition-all shadow-2xl uppercase tracking-widest text-sm"
                 >
                   Solicitar Orçamento Agora
                 </a>
                 <a 
                   href="tel:+552136226888"
                   className="px-10 py-5 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-primary transition-all uppercase tracking-widest text-sm"
                 >
                   Falar com Comercial
                 </a>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
