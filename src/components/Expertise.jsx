import React from 'react'
import { services } from '../constants';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, description, icon }) => {
  return (
    <Tilt>
    
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=""
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
          }}
        className="bg-black-gradient ">      

        <div key={index} className="min-h-[250px] min-w-[200px] border-2 border-white p-4 bg-[#070806] rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-white">
                  {icon}
                </div>
                <h4 className="text-white text-xl font-semibold">
                  <span className="relative inline-block">
                    {title}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ac829e] rounded-full"></span>
                  </span>
                </h4>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <p className="text-white text-center">{description}</p>
              </div>
            </div>
      </div>
      </motion.div>

    </Tilt>
  )
}

const Expertise = () => {
  return (
    <>
    <section className="">
        <motion.div>
          <h2 className={styles.sectionHeadText}>My Expertise</h2>
        </motion.div>
        <div className="flex flex-col items-center justify-center w-full h-full px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default SectionWrapper(Expertise, "expertise")

