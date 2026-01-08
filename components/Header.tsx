"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/constants/colors";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "O que é ESG" },
    { href: "#por-que", label: "Por que ESG" },
    { href: "#caminhos", label: "Os caminhos" },
    { href: "#solucoes", label: "Soluções" },
    { href: "#tecnologia", label: "Tecnologia" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f5f5f5] backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href={"/"}>
            <Image
              src="/logo_header.png"
              alt="Logo RNGEO"
              width={150}
              height={100}
            />
          </Link>

          <nav
            className="hidden md:flex gap-4"
            style={{ color: COLORS.textSecondary }}
          >
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-[#677e77] hover:text-[#80bc57] duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            <Link href={"/dashboard"}>
              <button className="cursor-pointer bg-[#6272b04f] text-[#6272b0] py-2 px-4 font-bold rounded-xl">
                Ver Demo
              </button>
            </Link>

            <a href="#contato">
              <button
                style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                className="py-2 px-4 font-bold rounded-xl cursor-pointer"
              >
                Fale Conosco
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
