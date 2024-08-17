import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'; 
import { EarthCanvas} from './canvas';
import { slideIn } from '../utils/motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}
      className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#ee7c53]" /> 
            <div className="w-1 sm:h-80 h-40 orange-gradient ml-2" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#ee7c53]'>Sherezade</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            web developer focused on crafting beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
      </motion.div>
      <div>
      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <a href="#expertise" >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 bg-secondary rounded-full mb-1"
            />
          </div>
        </a>
      </div>
      </div>
    </section>
  )
}

export default Hero


