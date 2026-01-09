"use client";

import React, { useState } from "react";
import { paths } from "../data/ThreePaths";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { COLORS } from "@/constants/colors";

function ThreePaths() {
  const [activePath, setActivePath] = useState("environmental");
  const activePathData = paths.find((path) => path.id === activePath);

  return (
    <section id="caminhos">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title">Os três caminhos do ESG</h2>
          <p className="subtitle">
            Explore cada dimensão da governança sustentável
          </p>
        </motion.div>

        {/* nav bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#7fbc5759] rounded-2xl p-2 gap-2">
            {paths.map((path) => (
              <button
                key={path.id}
                onClick={() => setActivePath(path.id)}
                className={cn(
                  "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2",
                  activePath === path.id
                    ? "bg-[#80bc57] text-[#f5f5f5] shadow-sm"
                    : "text-[#677e77] hover:text-[#1f2e29]"
                )}
              >
                <span className="text-2xl font-bold">{path.letter}</span>
                <span className="hidden sm:inline">{path.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* conteudo do path ativo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-[#f5f5f5] rounded-xl shadow-sm border border-[#80bc57] overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center">
                    <Image
                      width={50}
                      height={50}
                      src="/icons/what/environmental.png"
                      alt=""
                    />
                    <div>
                      <h3 className="text-[#677e77] text-2xl font-bold">
                        {activePathData.subtitle}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                  {activePathData?.items.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: COLORS.background }}
                    >
                      <item.icon className="text-[#80bc57] text-xl" />
                      <p className="text">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Mensagem específica */}
                <div
                  style={{ backgroundColor: COLORS.primary }}
                  className="rounded-2xl p-6 text-center shadow-[0px_0px_2px_0px_#3d519f]"
                >
                  <p className="text-lg md:text-xl font-semibold text-[#f5f5f5]">
                    {activePathData?.highlight}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ThreePaths;
