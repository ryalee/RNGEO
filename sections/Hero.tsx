import { COLORS } from '@/constants/colors'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className='mt-15'>
      <div className='mt-15 flex flex-col'>
      <img src="/icons/hero/clouds.png" alt="" className='absolute z-0 mt-[-10] hidden md:block'/>
        <h1 className='text-[38pt] font-medium md:text-[60pt] md:w-[80%] self-center z-10 text-center'>
          Caminhos para o futuro via <span style={{color: COLORS.primary, fontWeight: 'bold'}}>ESG</span>
        </h1>

        <p 
          style={{color: COLORS.textSecondary}}
          className='font-medium text-center text-[20pt] mt-5'
        >
          Como empresas, governos e startups podem transformar impacto em valor?
        </p>

        <p
          style={{color: COLORS.textSecondary}} 
          className='font-semibold text-center text-[14pt] mt-5'
        >
          ESG não é moda. É estratégia, reputação, competitividade e sobrevivência.
        </p>
      </div>

      <div className="flex flex-col items-center mt-10">
        <button className='linearGradient rounded-xl flex items-center text-[#f5f5f5] font-semibold justify-around px-4 py-4 w-75 md:w-80'>
          Explorar soluções ESG

          <Image
            width={40}
            height={40}
            src='/icons/hero/arrow.png'
            alt=''
          />
        </button>

        <button 
          style={{color: COLORS.primary}}
          className='border-2 border-primary flex items-center rounded-xl mt-4 px-4 py-4 gap-2 font-semibold w-75 justify-around md:w-80'
        >
          <Image
            width={40}
            height={40}
            src='/icons/hero/laptop.png'
            alt=''
          />
          Ver painel demonstrativo
        </button>
      </div>
    </section>
  )
}

export default Hero;