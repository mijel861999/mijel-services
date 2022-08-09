import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className='w-full h-full flex justify-center items-center p-10'>
      <div className='text-center'>
        <h1 className='text-4xl text-black font-black my-4 drop-shadow'>Mijel Services</h1>
        <h2 className='text-xl text-black drop-shadow'>Trabaja con nosotros y consigue resultados</h2>
        <h3 className='text-xl text-grey font-bold drop-shadow'>Consulta nuestros trabajos</h3>
        <a className='text-green underline font-bold' href='/'>Consulta aquí</a>
      </div>
    </section>
  )
}

export default Banner

