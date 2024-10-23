'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../variants";

const About = () => {
  return (
    <div className="bg-[#1E1E1E]">
    <motion.div 
    variants={fadeIn('up' , 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false , amount: 0.2 }}
    className=" pt-[183px] pb-24 px-4 md:px-10 lg:px-[80px] flex flex-col lg:flex-row items-center gap-10 leading-10" id="about">
      <Image src='/about.jfif' alt="about" width={630} height={679} className="max-w-full h-auto" />
      <div className="flex flex-col w-full">
        <div className="pl-3 border-l-[6px] border-primary">
          <h2 className="text-[28px] md:text-[36px] text-white font-semibold uppercase">
            Lorem ipsum dolor sit amet, conse adipisicing elit.
          </h2>
        </div>

        <div className="flex flex-col gap-6 mt-8 text-white leading-7 text-[14px] md:text-[16px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti voluptatibus excepturi? Asperiores dolorum voluptatem a nesciunt culpa tempore incidunt, repellat aliquid tenetur, cum neque, illum laborum assumenda corporis nobis?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab asperiores placeat laborum doloremque corporis enim distinctio, voluptatum deserunt. Doloribus quos saepe ducimus cupiditate, veniam praesentium! Tempora maiores pariatur veritatis eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti voluptatibus excepturi? Asperiores dolorum voluptatem a nesciunt culpa tempore incidunt, repellat aliquid tenetur, cum neque, illum laborum assumenda Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab asperiores placeat laborum doloremque corporis enim distinctio, voluptatum deserunt. Doloribus quos saepe ducimus cupiditate, veniam praesentium! Tempora maiores pariatur veritatis eos! corporis nobis?
          </p>
        </div>

        <div className="flex items-center justify-center mt-14">
          <button className="uppercase border border-primary hover:bg-primary transition duration-150  hover:text-black shadow-[0_0_5px_0_#D5BE7B] p-4 text-primary font-semibold text-[24px] md:text-[30px]">Réservez votre préparation</button>
        </div>

        <div className="flex items-center justify-end mt-5 relative">
          <Image src='/arrow.png' alt='arrow' width={40} height={40} className="absolute right-44" />
          <p className="text-white w-[197px] uppercase -rotate-[5.6deg] leading-[27.87px] font-bold text-center font-comic text-[14px] md:text-[16px]">commander dès maintenant</p>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default About;
