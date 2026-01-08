import React from "react";
import { WhyESG } from "../data/Why";
import { COLORS } from "@/constants/colors";
import Image from "next/image";

function Why() {
  return (
    <section id="por-que" className="flex flex-col">
      <div>
        <h1 className="title">Por que seguir o caminho ESG?</h1>
        <p className="subtitle">O mundo mudou, e os negócios também</p>
      </div>

      <div className="flex flex-col gap-6 items-center mt-15 md:grid md:grid-cols-3">
        {WhyESG.map((item) => (
          <div
            key={item.id}
            className="bg-[#f5f5f5] w-100 px-5 py-7 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] rounded-xl"
          >
            <div className="flex items-center gap-2">
              <img src={item.icon} className="w-12.5 h-12.5" />
              <h2
                className="first_letter text-2xl font-medium"
                style={{ color: COLORS.textPrimary }}
              >
                {item.title}
              </h2>
            </div>

            <p className="" style={{ color: COLORS.textSecondary }}>
              {item.text}
            </p>
          </div>
        ))}

        <div className="w-100 px-5 py-7 flex items-center justify-center">
          <Image src="/icons/why/world_image.png" width={200} height={200} />
        </div>
      </div>

      <div
        style={{ color: COLORS.textPrimary }}
        className="font-bold shadow-[0px_0px_5px_0px_rgba(128,188,87,1)] rounded-xl px-5 py-7 w-[90%] self-center mt-15"
      >
        <p className="text-center text-lg md:text-xl">
          Empresas com ESG vivem mais, crescem melhor e{" "}
          <span style={{ color: COLORS.primary, fontWeight: "bold" }}>
            impactam positivamente
          </span>
        </p>
      </div>
    </section>
  );
}

export default Why;
