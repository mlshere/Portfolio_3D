import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'; 
import { CubeComponent } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="fles flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ee7c53]" /> 
          <div className="w-1 sm:h-80 h-40 orange-gradient ml-2" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#ee7c53]'>Sherezade</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          web developer focused on crafting beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
      </div>
      <div className="mt-50">
        <CubeComponent />
      </div>
    </section>
  )
}

export default Hero