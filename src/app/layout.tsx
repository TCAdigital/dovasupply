import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DOVA Supply | Distribuidora de Cabos Elétricos Especializados",
  description: "Referência desde 1964 na distribuição de cabos elétricos industriais, navais, móveis e de potência. Qualidade certificada e pronta entrega para todo o Brasil.",
  keywords: ["cabos elétricos", "cabos navais", "distribuidora de cabos", "cabos de potência", "DOVA Supply", "Rio de Janeiro"],
  openGraph: {
    title: "DOVA Supply | Soluções em Cabos Elétricos",
    description: "Conectando qualidade, eficiência e experiência para impulsionar seus projetos.",
    url: "https://dovasupply.com.br",
    siteName: "DOVA Supply",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
