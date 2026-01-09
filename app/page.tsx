import Image from "next/image";
import { COLORS } from "@/constants/colors";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Why from "@/sections/Why";
import ThreePaths from "@/sections/ThreePaths";
import Steps from "@/sections/Steps";
import Solutions from "@/sections/Solutions";
import Contact from "@/sections/Contact";
import Services from "@/sections/Services";
import Diferencial from "@/sections/Diferencial";
import Techs from "@/sections/Tech";
import CallToAction from "@/sections/CallToAction";
import Future from "@/sections/Future";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-full px-4 md:px-8 flex flex-col gap-50">
      <Hero />
      <About />
      <Why />
      <ThreePaths />
      <Steps />
      <Solutions />
      <Services />
      <Diferencial />
      <Techs />
      <CallToAction />
      <Future />
      <Contact />
    </main>
  );
}
