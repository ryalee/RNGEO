import { COLORS } from "@/constants/colors";
import React from "react";

function Contact() {
  return (
    <section id="contato" className="bg-[#f5f5f5] p-5 flex flex-col items-center gap-10 justify-around md:flex-row">
      <div className="flex flex-col items-center text-center">
        <img src="/icons/contact/Email.png" alt="" className="w-20" />
        <h3>Email</h3>
        <p style={{color: COLORS.textSecondary}}>adricarocha@gmail.com</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="/icons/contact/Phone.png" alt="" className="w-20" />
        <h3>Telefone</h3>
        <p style={{color: COLORS.textSecondary}}>(84) 98846-4912 <br/> (84) 98194-0164</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="/icons/contact/map.png" alt="" className="w-20" />
        <h3>Endereço</h3>
        <p style={{color: COLORS.textSecondary}}>AV Engenheiro Roberto Freire 1962 <br/> Loja 13 Cond Seaway Shopping <br/> Capim Macio Natal-RN</p>
      </div>
    </section>
  );
}

export default Contact;
