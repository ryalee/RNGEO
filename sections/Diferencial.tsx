import React from "react";
import { diferenciais } from "../data/Diferenciais";
import { COLORS } from "@/constants/colors";
import Image from "next/image";

function Diferencial() {
  return (
    <section className="bg-[#f5f5f5] py-10 flex flex-col rounded-2xl">
      <div>
        <h1 className="title">Nosso Diferencial</h1>
        <p className="subtitle">O que nos torna únicos no mercado</p>
      </div>

      <div className="flex flex-col">
        <div className="flex px-5 mt-15 flex-col md:flex-row md:gap-0 gap-20">
          {diferenciais.map((diferencial) => (
            <div key={diferencial.id} className="flex flex-col items-center gap-2">
              <img src={diferencial.icon} className="w-12.5" />
              <p
                className="text-center w-[70%]"
                style={{ color: COLORS.textSecondary }}
              >
                {diferencial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#ccc] h-0.5 w-[90%] self-center my-15"></div>

        <div className="self-center text-center flex flex-col">
          <h2 className="text-3xl font-medium" style={{color: COLORS.textPrimary}}>RNGEO Soluções</h2>
          <p style={{color: COLORS.textSecondary}} className="font-medium w-[80%] self-center md:text-xl mt-2">
            Transformamos dados em decisões, tecnologia em impacto e inovação
            em futuro sustentável.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Diferencial;
