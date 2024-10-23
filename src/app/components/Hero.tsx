import React from 'react';
import Header from './Header';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className='relative bg-[#191919]/90 clip-slope'>
        <div className="relative h-[450px] bg-cover bg-center bg-[url('/hero.jfif')]">
          <div className="absolute inset-0 bg-black/50"></div>
          <Header />
        </div>
      </div>
      
      <div className="relative z-50 -mt-28 mx-auto bg-[#1E1E1E] px-4 md:px-10 lg:px-[40px] py-[35px] shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-[615px]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white font-medium text-[16px] md:text-[20px] leading-5 text-center">100% Halal - AVS</p>
          <Image src="/halal.png" alt="Halal" width={30} height={30} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white font-medium text-[16px] md:text-[20px] leading-5">Viande Maturée</p>
          <Image src="/meat.png" alt="Viande" width={30} height={30} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-white font-medium text-[16px] md:text-[20px] leading-5">Préparation Maison</p>
          <Image src="/knife.png" alt="Preparation" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
