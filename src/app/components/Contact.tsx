'use client';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Mail, MapPin, Phone } from 'lucide-react';
import Textarea from '@mui/joy/Textarea';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';


const Contact = () => {
  const options = ['The Godfather', 'Pulp Fiction'];

  return (
    <div className=' flex py-[97px] px-4 flex-wrap justify-center overflow-hidden' id='contact'>
 
        <motion.div 
        variants={fadeIn('right' , 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false , amount: 0.2 }}
        className='w-full max-w-[522px] px-4 md:px-0'>
        <h3 className='uppercase font-semibold text-[22px] md:text-[26px] leading-7 border-b-4 border-primary pb-3 md:pb-5'>
            Information de la boulangerie
        </h3>

        <div className='mt-8 md:mt-16 flex flex-col gap-8 md:gap-[70px]'>
            <div className='flex gap-4 md:gap-[33px] items-center'>
            <MapPin className='text-[#A7A7A7] w-12 md:w-[75px] h-12 md:h-[75px]' />
            <p className='text-[#0F0E0C] uppercase text-[14px] md:text-[24px] font-normal leading-6 md:leading-8 flex-1'>
                l’ART DU BOUCHER 25 AV. DE STALINGRAD, 92700 COLOMBES, FRANCE
            </p>
            </div>
            <div className='flex gap-4 md:gap-[33px] items-center'>
            <Mail fill='#A7A7A7' className='text-white w-12 md:w-[75px] h-12 md:h-[75px]' />
            <p className='text-[#0F0E0C] uppercase text-[14px] md:text-[24px] font-normal leading-6 md:leading-8 flex-1'>
                Envoyez-nous un e-mail : lartduboucher92@gmail.com
            </p>
            </div>
            <div className='flex gap-4 md:gap-[33px] items-center'>
            <Phone fill='#A7A7A7' className='text-white w-12 md:w-[75px] h-12 md:h-[75px]' />
            <p className='text-[#0F0E0C] uppercase text-[14px] md:text-[24px] font-normal leading-6 md:leading-8 flex-1'>
                l’ART DU BOUCHER 25 AV. DE STALINGRAD, 92700 COLOMBES, FRANCE
            </p>
            </div>
        </div>
        </motion.div>

      {/* Right side: Contact form */}
      <motion.div 
      variants={fadeIn('left' , 0.1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false , amount: 0.2 }}
      className='max-w-[738px] w-full  flex flex-col items-center justify-center p-4 mt-9 lg:m-0 '>
        <h2 className='text-[28px] md:text-[34px]  font-medium leading-10 text-center uppercase lg:mb-20 mb-8'>
          Contactez-nous
        </h2>

        <div className='flex flex-col gap-[34px] md:border-l border-primary pl-4 '>
          <form action='' className=' lg:justify-end lg:items-end  flex flex-col gap-[34px] p-4'>
            {/* Sujet Field */}
            <div className='flex flex-col lg:flex-row items-center gap-4'>
              <label htmlFor='sujet' className='font-bold text-[24px]'>
                Sujet
              </label>
              <Autocomplete
                id='sujet'
                disablePortal
                options={options}
                sx={{ width: '95%' }}
                className='w-full max-w-[414px] lg:w-[414px]'
                
                renderInput={(params) => (
                  <TextField {...params} label='Choisir votre sujet ...'required />
                )}
              />
            </div>

            {/* Email Field */}
            <div className='flex flex-col lg:flex-row items-center gap-4'>
              <label htmlFor='email' className='font-bold text-[24px]'>
                Adresse e-mail
              </label>
              <TextField
                id='email'
                type='email'
                label='votre@email.com'
                variant='outlined'
                className='w-full max-w-[414px]  lg:w-[414px]'
                required
              />
            </div>

            {/* Document Joint Field */}
            <div className='flex flex-col lg:flex-row items-center gap-4'>
            <label htmlFor='document' className='font-bold text-[20px] md:text-[24px]'>
            Document joint
            </label>
            <div className='relative w-full max-w-[414px] h-[90px] flex items-center flex-col lg:flex-row  lg:w-[414px]'>
            <input
            id='document'
            type='file'
            className='opacity-0 absolute h-full cursor-pointer w-full'
            />
            <div className='w-full h-full border border-[#A7A7A7] flex items-center  justify-between py-3'>
            <span className='w-[217px] font-bold text-[20px] md:text-[24px]'></span>
            <span className='md:w-[197px] w-16 h-[90px] flex justify-center items-center uppercase text-[12px] md:text-[14px] bg-[#A7A7A7]'>
            Envoyer un fichier
            </span>
            </div>
            <span className='ml-4 text-gray-400 text-[16px] md:text-[18px]'>optionnel</span>
            </div>
            </div>


            <div className='flex flex-col lg:flex-row items-center gap-4'>
              <label htmlFor='message' className='font-bold text-[24px]'>
                Message
              </label>
              <Textarea minRows={2} className=' h-[195px] max-w-[414px] bg-white py-4 w-full  lg:w-[414px]' placeholder='Comment pouvons-nous aider ?' required />
            </div>

            <button className='uppercase font-bold text-[24px] p-[15px] bg-primary'>envoyer</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
