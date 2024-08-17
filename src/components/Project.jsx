import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { lobelokal } from '../assets';


const ProjectBox = ({ index }) => (
  <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      animate="show"
      className="flex flex-col items-start justify-between gap-4 my-8 px-8"
      >
       
      
      <div className="relative max-w-full flex-1">
          <img 
            src={lobelokal} 
            alt="Lobe Lokal landing page"
            className="max-w-full border-2 border-orange-500 shadow-lg rounded-lg"
          />
        <div className="absolute top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] border-2 border-dashed border-orange-500/80 rounded-lg -z-10"></div>
        
        </div>
        <a
          href="https://lobeblock.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-orange-500 text-white text-lg px-8 py-4 rounded-md hover:bg-orange-600 transition ease-in-out"
        >
          View Project
        </a>
  </motion.div>
)



const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Work</h2>
        <p className={styles.sectionSubText}>After a decade in the kitchen industry, I discovered web development while redesigning a website for the Lobe Space building in 2022. This experience started my passion for programming, leading me to pursue a new career in web and software development.</p>
      </motion.div>
      <ProjectBox index={1}/>
    </>
  )
}

export default SectionWrapper(Project, "work")