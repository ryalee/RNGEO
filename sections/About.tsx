import React from "react";
import { AboutESG } from "../data/AboutESG";
import { COLORS } from "@/constants/colors";

function About() {
  return (
    <section id="sobre">
      <div className="">
        <h1 className="title">O que é ESG?</h1>
        <p className="subtitle">
          Governança ambiental com responsabilidade e resultado
        </p>
      </div>

      <div className="flex flex-col gap-6 items-center mt-15 md:flex-row md:justify-evenly">
        {AboutESG.map((item) => (
          <div 
            key={item.id}
            className="bg-[#f5f5f5] w-90 px-5 py-7 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] rounded-xl"
          >
            <div className="flex items-center">
              <img src={item.icon} className="w-12.5 h-12.5" />
              <h2 
                className="first_letter text-2xl font-medium"
                style={{color: COLORS.textPrimary}}
              >
                {item.title}
              </h2>
            </div>

            <p 
              className=""
              style={{color: COLORS.textSecondary}}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div 
        style={{backgroundColor: COLORS.primary, color: COLORS.white}}
        className="font-bold shadow-[0px_0px_5px_0px_rgba(61,81,159,1)] rounded-xl px-5 py-7 mt-10"
      >
        <p className="text-center text-xl">ESG não é moda. É estratégia, reputação, competitividade e sobrevivência.</p>
      </div>
    </section>
  );
}

export default About;
