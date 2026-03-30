import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 text-center">
      <div className="relative mb-8">
        <h1 className="text-[12rem] md:text-[18rem] font-display font-black leading-none text-primary/10 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground">
            Página Não <span className="text-primary">Encontrada</span>
          </h2>
        </div>
      </div>
      
      <p className="max-w-md text-lg text-foreground/60 font-sans mb-12 leading-relaxed">
        Desculpe, o conteúdo que você procura não existe ou foi movido. 
        Utilize o botão abaixo para retornar à nossa vitrine principal.
      </p>

      <Link 
        href="/"
        className="flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-sm hover:bg-accent-1 transition-all shadow-2xl uppercase tracking-widest text-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar para a Home
      </Link>

      <div className="mt-20 flex flex-col items-center opacity-30">
        <span className="text-2xl font-display font-bold leading-none text-foreground uppercase">
          DOVA
        </span>
        <span className="text-[0.6rem] font-sans font-bold tracking-[0.3em] text-foreground uppercase">
          Supply
        </span>
      </div>
    </div>
  );
}
