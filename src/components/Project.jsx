import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { lobelokal } from '../assets';

const featuredProjects = [
  {
    name: "Lobe Block",
    description: "Website for a community space, events and canteen in Berlin.",
    image: lobelokal,
    projectUrl: "https://lobeblock.de/",
    technology: "Website",
  },
  {
    name: "B-Visual",
    description: "Designer portfolio showcasing visual work and services.",
    projectUrl: "https://b-visual.es/",
    technology: "WordPress",
  },
  {
    name: "Terapia Online en Español",
    description: "A Spanish-language website for online therapy services.",
    projectUrl: "https://terapiaonlineenespanol.com/",
    technology: "Website",
  },
];

const ProjectBox = ({ index, name, description, image, projectUrl, technology }) => (
  <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial={false}
      animate="show"
      className="flex flex-col items-start justify-between gap-4 my-8 px-8"
      >
      <div className="relative max-w-full flex-1">
        {image ? (
          <img
            src={image}
            alt={`${name} website preview`}
            className="max-w-full border-2 border-[#ac829e] shadow-lg rounded-lg"
          />
        ) : (
          <div className="min-h-[280px] w-full rounded-lg border-2 border-[#ac829e] bg-gradient-to-br from-[#231d2e] via-[#171421] to-[#0b0910] p-8 shadow-lg sm:min-h-[360px] sm:p-14 flex flex-col justify-between">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c5a6bd]">{technology}</p>
            <div>
              <h3 className="text-3xl font-bold text-white sm:text-5xl">{name}</h3>
              <p className="mt-4 max-w-2xl text-base text-secondary sm:text-xl">{description}</p>
            </div>
            <p className="text-sm text-[#c5a6bd]">{projectUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
          </div>
        )}
        <div className="absolute top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] border-2 border-dashed border-[#ac829e] rounded-lg -z-10"></div>
      </div>
      <h3 className="mt-2 text-2xl font-bold text-white">{name}</h3>
      <p className="text-secondary">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} website`}
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
      <div className="space-y-12">
        {featuredProjects.map((project, index) => (
          <ProjectBox key={project.name} index={index + 1} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Project, "work")