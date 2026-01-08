import React from 'react'
import { steps } from '../data/Steps'
import { COLORS } from '@/constants/colors'

function Steps() {
  return (
    <section className='flex flex-col'>
      <div>
        <h1 className='title'>Caminhos Práticos para Empresas</h1>
        <p className='subtitle'>Um roteiro claro para implementação ESG</p>
      </div>

      <div className=''>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:items-center md:justify-around mt-15 md:px-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            <div className='flex items-center gap-2'>
              <div 
                className='w-20 h-20 border-2 rounded-full flex justify-center items-center'
                style={{ borderColor: COLORS.primary }}
              >
                <span 
                  style={{color: COLORS.primary}}
                  className='font-bold text-2xl'
                >
                  {step.number}
                </span>
              </div>

              <div className=''>
                <h2 
                  className='text-xl font-semibold'
                  style={{color: COLORS.textPrimary}}
                >
                  {step.title}
                </h2>
                <p 
                  style={{ color: COLORS.textSecondary }}
                >
                  {step.description}
                </p>
              </div>
            </div>

            <div></div>
          </div>
        ))}
      </div>

      <div 
        style={{ color: COLORS.textPrimary }}
        className="font-bold shadow-[0px_0px_5px_0px_rgba(128,188,87,1)] rounded-xl px-5 py-7 mt-15 w-[90%] self-center"
      >
        <p className='text-center text-lg md:text-xl'>ESG começa com decisão, evolui com gestão e cresce com inovação.</p>
      </div>
    </section>
  )
}

export default Steps