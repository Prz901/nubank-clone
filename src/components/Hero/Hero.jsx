import React from "react";

// import hero from '../../utils/imageBackground/'

export default function Hero() {
  return (
    <div className="h-screen relative w-full">
      <img
        src="https://nubank.com.br/_next/static/images/474b61fdb5242c1a2a7b40295c5b2807-woman-holding-card-smiling@3x.jpg.webp"
        alt="nubank card"
        className="image"
      />
      <div className="absolute flex justify-between items-center top-40 w-full px-20">
        <div className="w-1/4">
          <h1 className="text-5xl text-white font-semibold">
            Ser Nubank é reinventar a sua vida financeira
          </h1>
        </div>
        <div className="w-1/4 bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-medium tracking-wide py-2">
            Para começar, digite seu nome no campo abaixo
          </h2>
          <div className='py-6'>
          <input
            type="text"
            placeholder="Nome Completo"
            className="outline-none border-b border-gray-300 w-full border-solid py-2 object-cover "
          />
          </div>

          <div className=' py-8 w-full'>
            <p className='bg-gray-400 cursor-pointer w-full px-6 rounded-full p-2 opacity-50'>Continuar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
