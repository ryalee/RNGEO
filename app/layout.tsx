import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "RNGEO | Tecnologia e Sustenabilidade",
  description: "Transforme ESG em vantagem competitiva com soluções sustentáveis, tecnologia verde e governança eficiente para empresas modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={montserrat.className}
        style={{ backgroundColor: "#eaf4ef" }}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
