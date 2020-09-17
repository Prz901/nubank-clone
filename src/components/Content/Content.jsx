import React from "react";

export default function Content() {
  return (
    <div className="relative h-screen  w-full py-20">
      <div className="absolute top-half px-20 w-full">
        <h1 className="w-1/2 text-5xl font-semibold text-white">
          O fim da complexidade{" "}
        </h1>
        <h2 className="w-1/3 text-2xl font-normal text-white tracking-wide py-10">
          Para quem sabe de tecnologia e design são melhores do que agências e
          papelada
        </h2>
      </div>
      <img
        src="https://nubank.com.br/_next/static/images/2ac7e001ee2e06ca7c2edc51c1b173bd-complexity@1x.jpg.webp"
        alt="content"
      />
      <div className="background-nubank flex justify-between items-center px-20">
        <div className='w-1/3'>
          <h1 className='text-4xl text-white font-semibold tracking-wide py-6'>Zero Anuidade</h1>
          <h2 className='text-2xl text-white font-medium tracking-wide '>
            Burocracia custa caro. Somos eficientes para voce não ter que pagar
            tarifas
          </h2>
        </div>
        <div className='w-1/3'>
          <p className='text-6xl text-danger-200 font-bold'>0,00</p>
        </div>
      </div>
    </div>
  );
}
