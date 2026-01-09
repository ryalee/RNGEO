'use client'

import React from "react";
import { motion } from 'framer-motion';
import { solutions } from "../data/SolutionsPerfil";
import { COLORS } from "@/constants/colors";
import Image from "next/image";

function Solutions() {
  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: COLORS.textPrimary }} className=" title">
            Soluções por Perfil
          </h2>
          <p className="subtitle">
            Abordagens personalizadas para cada tipo de organização
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-[#f5f5f5] rounded-3xl hover:shadow-sm transition-all duration-300 shadow-md h-full flex flex-col">
                <div className="p-8 flex-1">
                  <Image src={solution.image} width={64} height={64} alt=""/>
                  <h3 className=" text-2xl font-bold mb-2" style={{color: COLORS.textPrimary}}>
                    {solution.title}
                  </h3>
                  <p className="mb-6" style={{color: COLORS.textSecondary}}>
                    {solution.subtitle}
                  </p>

                  <span>{solution.check}</span>
                  <ul className="flex flex-col gap-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Image
                          src='/icons/solutions/checked.png'
                          width={30}
                          height={30}
                          alt=""
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 pb-8 flex flex-col">
                  <div style={{ backgroundColor: COLORS.primary }} className="rounded-xl p-4 mb-6">
                    <p className="text-[#f5f5f5] font-semibold">
                      {solution.highlight}
                    </p>
                  </div>

                  <button className="bg-[#7fbc57c0] w-[80%] self-center py-3 rounded-xl font-semibold text-[#f5f5f5]">
                    Saiba mais
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
