import React, { useState } from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { projects, filters } from '../constants';
import { Tilt } from 'react-tilt';


const ProjectCard = ({ index, name, description, tags, image, source_code_link, }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} initia="hidden" animate="show">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-black-gradient p-5 rounded-2xl sm:w-[360px] w-full border-2 border-secondary"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover" >
            <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" 
            >
              <img 
                src={github}
                alt="Github"
                className="w-1/2 h-1/2"
                />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterClick = (id) => {
    setSelectedCategory(id);
  };

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category.includes(selectedCategory)
  );


  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What have I done</p>
      <h2 className={styles.sectionHeadText}>My projects</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p
        variants={fadeIn("","", 0,1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcase my skills and experience in web development through real-world examples. 
        Each project is briefly described with links to code repositories and live demos in it. 
        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
     
    </div>
    <div className="filters flex items-center mt-10 mx-5">
        <span className="text-secondary mr-2 text-lg">Filter by</span>
        {<ul className="flex space-x-4">
          {filters.map((filter, index) => (
            <li 
            key={filter.id} 
            className="filter-btn relative inline-block px-4 py-2 text-lg cursor-pointer text-secondary hover:text-gray-600"
            onClick={() => handleFilterClick(filter.id)}
            >
            {filter.title}
            
            </li>
          ))}
          </ul>}
    </div>
    <div className="projects flex flex-wrap gap-5 justify-center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))
      ) : (
        <p className="text-white">No projects found</p>
      )}
    </div>
  </>
  )
}

export default SectionWrapper(Works, ""); 

