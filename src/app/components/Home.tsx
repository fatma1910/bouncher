'use client'

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";


const HomeSection = () => {
    return (
      <div
        className="relative flex justify-center items-center bg-[url('/home.jfif')] bg-center bg-cover h-[1183px] -mt-44 before:absolute before:inset-0 before:bg-black/50 before:content-[''] -z-10"
        id="home"
      >
        <motion.div
        variants={fadeIn('up' , 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false , amount: 0.2 }}
        className="relative z-10 flex items-center gap-8 flex-col md:gap-14">
          <div className="text-white flex flex-col items-center justify-center gap-8 md:gap-14">
            <h2 className="uppercase text-[40px] md:text-[63px] font-bold text-center">
              découvrez l’authenticité de votre <span className="text-primary">boucherie</span> locale
            </h2>
            <p className="font-light text-[24px] md:text-[36px] leading-8 md:leading-10 text-center">
              Viandes sélectionnées avec passion, fraîcheur garantie chaque jour
            </p>
          </div>
  
          <button
            className="font-bold text-[20px] md:text-[28px] bg-primary p-4 md:p-[10px] shadow-[0_0_5px_0_#D5BE7B]"
            style={{ textShadow: '0px 4px 14.8px #00000080' }}
          >
            Choisir votre préparation
          </button>
        </motion.div>
      </div>
    );
  };
  
  export default HomeSection;
  