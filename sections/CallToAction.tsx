import { COLORS } from '@/constants/colors';
import Link from 'next/link';
import React from 'react'

function CallToAction() {
  return (
    <section className='bg-[#f5f5f5] flex flex-col md:flex-row md:justify-between rounded-4xl md:w-[80%] md:self-center'>
      <div className='px-5 py-7 md:py-0 md:w-[50%] flex flex-col gap-10 items-center justify-center'>
        <div>
          <h1 className='text-2xl text-[#1f2e29] font-semibold text-center'>Veja o ESG na prática</h1>
          <p className='text-center text-lg' style={{color: COLORS.textSecondary}}>Ferramentas avançadas para resultados concretos</p>
        </div>

        <div className='bg-[#90bc5750] flex items-center p-2 gap-2 rounded-xl'>
          <img src='/icons/demoPanel/eye_checked.png' className='w-10 h-10'/>
          <p>Este painel é apenas uma amostra do tipo de análise e visualização que entregamos aos nossos clientes.</p>
        </div>

        <Link href={'/dashboard'}>
          <button style={{backgroundColor: COLORS.primary}} className='shadow-[0px_0px_10px_0px_#00000021] text-[#f5f5f5] font-semibold px-7 py-5 rounded-xl'>
            Visualizar demonstração
          </button>
        </Link>
      </div>

      <div className='bg-[#80bc5750] p-7 flex items-center rounded-4xl md:w-[50%]'>
        <img src="/icons/demoPanel/mainImage.png" alt="" className=''/>
      </div>
    </section>
  )
}

export default CallToAction;