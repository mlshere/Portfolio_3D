import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { lobelokal } from '../assets';


const ProjectBox = ({ index }) => (
  <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial={false}
      animate="show"
      className="flex flex-col items-start justify-between gap-4 my-8 px-8"
      >
       
      
      <div className="relative max-w-full flex-1">
          <img 
            src={lobelokal} 
            alt="Lobe Lokal landing page"
            className="max-w-full border-2 border-[#ac829e] shadow-lg rounded-lg"
          />
        <div className="absolute top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] border-2 border-dashed border-[#ac829e] rounded-lg -z-10"></div>
        
        </div>
        <a
          href="https://lobeblock.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-[#ac829e] text-white text-lg px-8 py-4 rounded-md hover:bg-[#77506b] transition ease-in-out"
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
        <p className={styles.sectionSubText}>I bring together data, experimentation and development to improve ecommerce experiences. My work spans A/B testing, martech integrations, automation and cloud, with a focus on practical implementation.</p>
      </motion.div>
      <ProjectBox index={1}/>
    </>
  )
}

export default SectionWrapper(Project, "work")