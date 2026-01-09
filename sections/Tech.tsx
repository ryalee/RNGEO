import React from 'react'
import { techs } from '../data/Technology'
import { COLORS } from '@/constants/colors'

function Techs() {
  return (
    <section className='flex flex-col items-center'>
      <div>
        <h1 className='title'>Tecnologia como ponte</h1>
        <p className='subtitle'>Ferramentas avançadas para resultados concretos</p>
      </div>

      <div className='flex flex-col items-center md:grid md:grid-cols-3 gap-8 mt-15'>
        {techs.map((tech) => (
          <div
            key={tech.id}
            className='bg-[#f5f5f5] rounded-xl px-5 py-7 w-80 shadow-[0px_0px_10px_0px_#00000021]'
          >
            <div className='flex flex-col items-center text-center'>
              <img src={tech.icon}
                className='w-17.5 h-17.5'
               />
              <h2 className='font-medium' style={{color: COLORS.textPrimary}}>{tech.title}</h2>
              <p style={{color: COLORS.textSecondary}}>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{backgroundColor: COLORS.primary}} className='rounded-xl shadow-[0px_0px_10px_0px_#00000021] mt-15'>
        <p className='text-[#f5f5f5] px-5 py-7 text-xl font-semibold'>Inovação é o motor que transforma ESG em resultado</p>
      </div>
    </section>
  )
}

export default Techs