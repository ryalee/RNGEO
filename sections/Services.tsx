import React from 'react'
import { services } from '../data/Services';
import Image from 'next/image';
import { COLORS } from '@/constants/colors';

function Services() {
  return (
    <section className='flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <span style={{color: COLORS.primary}} className='text-xl'>Inovação, Tecnologia, Sustentabilidade e inteligência Aplicada</span>
        <h1 className='title'>RNGEO Soluções</h1>
        <p className='subtitle'>A RNGEO Soluções amplia sua atuação para além das soluções ambientais tradicionais, posicionando-se como uma empresa de inovação ambiental e tecnológica, com foco em capacitação prática, transformação digital sustentável e desenvolvimento de negócios alinhados aos desafios climáticos e às novas economias verdes.</p>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2 gap-8 mt-15'>
        {services.map((service) => (
          <div
            key={service.id}
            className='bg-[#f5f5f5] p-10 shadow-sm rounded-2xl'
          >
            <div className='flex items-center gap-5'>
              <div style={{backgroundColor: COLORS.primary}} className='flex rounded-full p-2 w-20 h-20 items-center justify-center'>
                <img src={service.icon} className='w-12'/>
              </div>

              <span className='text-5xl font-medium' style={{color: COLORS.textSecondary}}>{service.number}</span>
            </div>

            <div className='mt-5'>
              <h2 style={{color: COLORS.textPrimary}} className='text-2xl font-medium'>{service.title}</h2>
              <p style={{color: COLORS.textSecondary}}>{service.subtitle}</p>
            </div>

            <div className='flex flex-col gap-4 mt-5'>
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-2'
                >
                  <img
                    src='/icons/works/checked.png'
                    className='w-8'
                  />
                  <p>{item}</p>
                </div>
              ))}

              {service.highlight && (
                <div className='mt-4 p-3 rounded-xl' style={{backgroundColor: COLORS.primary}}>
                  <p className='font-medium text-[#f5f5f5]'>{service.highlight}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className='flex items-center justify-center'>
          <img src="/icons/why/world_image.png" className='w-100 h-100' />
        </div>
      </div>
    </section>
  )
}

export default Services