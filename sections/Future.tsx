import React from 'react'
import {futureItems} from '../data/FutureItems';
import { COLORS } from '@/constants/colors';

function Future() {
  return (
    <section>
      <h1 className='title'>O futuro pelos caminhos ESG</h1>

      <div className='flex flex-col gap-5 md:flex-row justify-around mt-15'>
        {futureItems.map((item) => (
          <div key={item.id} className='bg-[#f5f5f5] flex flex-col px-5 py-3 gap-2 rounded-full items-center md:flex-row shadow-[0px_0px_10px_0px_#00000025]'>
            <img src={item.icon} alt="" className='w-12'/>
            <p style={{color: COLORS.textSecondary}} className='text-lg md:text-sm'>{item.text}</p>
          </div>
        ))}
      </div>

      <div className='mt-15 flex flex-col items-center gap-8'>
        <p className='subtitle'>ESG é o caminho onde o propósito, inovação e resultado caminham juntos.</p>

        <a href="https://wa.me/5574999944759?text=Quero+saber+mais+sobre+ESG" target='_blank'>
          <button className='linearGradient rounded-xl flex items-center text-[#f5f5f5] font-semibold justify-around px-4 py-4 w-75 md:w-80 shadow-[0px_0px_10px_0px_#00000040]'>Fale com um especialista ESG</button>
        </a>
      </div>
    </section>
  )
}

export default Future;