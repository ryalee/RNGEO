import { COLORS } from "@/constants/colors";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col justify-around mt-15 p-5 bg-[#80bc57]">
      <div className="flex flex-col md:flex-row">
        <div>
          <Image
            src="/icons/logo/logo_footer.png"
            alt=""
            width={150}
            height={100}
          />

          <p className="w-[60%]">
            Consultoria especializada em ESG e sustentabilidade para empresas, startups e governos.
          </p>
        </div>

        <div className="flex w-[40%] justify-around gap-10 mt-5 md:mt-0 md:gap-0">
          <div className="flex flex-col">
            <h2 className="text-[#f5f5f5] font-medium">Navegação</h2>

            <ul className="flex flex-col text-sm text-[#1f2e29] gap-1">
              <a href="#sobre">O que é ESG?</a>
              <a href="#por-que">Por que ESG?</a>
              <a href="#caminhos">Os Caminhos</a>
              <a href="#solucoes">Soluções</a>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-[#f5f5f5] font-medium">Recursos</h2>

            <ul className="flex flex-col gap-1 text-sm text-[#1f2e29]">
              <a href="/dashboard">Painel Demo</a>
              <a href="#tecnologia">Tecnologia</a>
              <a href="#contato">Contato</a>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[0.2] w-[90%] bg-[#3d519f] self-center mt-5"></div>

      <div style={{ color: COLORS.textPrimary }} className="flex flex-col text-center mt-5">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} RNGEO. Todos os direitos reservados
        </p>
        <p className="text-xs">
          Desenvolvido por <a href="https://www.zunbee.com.br" target="_blank" className="text-[#ffc300] font-bold underline text-shadow-md">Zunbee</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
