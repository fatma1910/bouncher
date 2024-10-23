'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../variants";

const Services = () => {
  return (
    <motion.div 
      variants={fadeIn('up' , 0.1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false , amount: 0.2 }}
    className="py-[50px] sm:py-[93px] px-[20px] sm:px-[50px] md:px-[80px] flex flex-col items-center justify-center "
    id="services"
    >
      <h2
        className="uppercase font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-8 sm:leading-10 text-center"
        style={{ textShadow: '0 4px 8px rgba(213, 190, 123, 0.8)' }}
      >
        ce nous vous offrons de spéciale chez l’art du{' '}
        <span className="text-primary">boucher</span>
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 my-14 md:my-24">

        <div className="flex flex-col gap-[15px] sm:gap-[31px] items-center justify-center">
          <Image src="/collection.png" alt="Collection invités" width={413} height={395} className="w-full h-auto" />
          <h4 className="text-[24px] sm:text-[28px] md:text-[36px] niconne-regular text-center">Collection invités</h4>
        </div>


        <div className="flex flex-col gap-[15px] sm:gap-[31px] items-center justify-center">
          <Image src="/crousty.png" alt="Crousty de dinde" width={413} height={395} className="w-full h-auto" />
          <h4 className="text-[24px] sm:text-[28px] md:text-[36px] niconne-regular text-center">Crousty de dinde</h4>
        </div>


        <div className="flex flex-col gap-[15px] sm:gap-[31px] items-center justify-center">
          <Image src="/preparations.png" alt="Preparations variées" width={413} height={395} className="w-full h-auto" />
          <h4 className="text-[24px] sm:text-[28px] md:text-[36px] niconne-regular text-center">Preparations variées</h4>
        </div>
      </div>


      <button className="bg-primary p-[10px] px-5 rounded-[4px] shadow-lg text-[14px] sm:text-[28px] md:text-[32px] font-bold leading-10 mt-10 hover:bg-primary/75 transition-all duration-200">
        Réservez votre préparation
      </button>
    </motion.div>
  );
};

export default Services;
