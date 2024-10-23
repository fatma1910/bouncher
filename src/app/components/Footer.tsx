import { Facebook, Instagram, LifeBuoy } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className='px-4 md:px-[80px] py-[37px] bg-[#0F0E0C]'>
      <div className='flex flex-col md:flex-row justify-between text-white'>
        <div className='flex flex-col gap-[27px]'>
          <h2 className='uppercase font-bold text-[28px] md:text-[32px] leading-10'>
            l’art du <span className='text-primary'>boucher</span>
          </h2>
          <p className='font-normal text-[14px] md:text-[16px]'>25 AV. DE STALINGRAD, 92700 COLOMBES, FRANCE</p>
          <p className='font-normal text-[14px] md:text-[16px]'>+33 1 57 71 00 63</p>
        </div>
        <div className='flex gap-4 mt-4 md:mt-0'>
          <a href='#' className='text-white hover:text-primary transform duration-75'>
            <Facebook />
          </a>
          <a href='#' className='text-white hover:text-primary transform duration-75'>
            <Instagram />
          </a>
          <a href='#' className='text-white hover:text-primary transform duration-75'>
            <LifeBuoy />
          </a>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between mt-12 text-center md:text-left'>
        <p className='font-normal text-white text-[14px] md:text-[16px]'>lartduboucher92@gmail.com</p>
        <div className='flex flex-col md:flex-row gap-4 md:gap-[138px] text-white'>
          <p className='font-normal text-[14px] md:text-[16px]'>Privacy Policy</p>
          <p className='font-normal text-[14px] md:text-[16px]'>Termes & conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
