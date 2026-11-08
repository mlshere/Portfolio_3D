import timeline from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';


import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const { VerticalTimeline, VerticalTimelineElement } = timeline;

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    date={experience.date}
    contentStyle={{ background: '#070806', color: '#fff', paddingTop: "5px"}}
    contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
    
    iconStyle={{ background: '#ffffff' }}
    icon={
    <div className="flex justify-center items-center w-full h-full">
      <img 
        src={experience.icon}
        alt={experience.title}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
    }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company || experience.city_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience.point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
        ))}
      </ul>
      
  </VerticalTimelineElement> 
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>A little about me</p>
      <h2 className={styles.sectionHeadText}>My journey</h2>
      <p className={styles.sectionSubText}>
        I&apos;m a marketing data analytics specialist and ecommerce, CRO and web developer.
        I work across A/B testing, martech, data, automation and cloud.
        As a self-taught developer, I&apos;ve built skills in JavaScript, React, SQL and Python,
        complemented by a data analytics bootcamp.
        My background in media, gastronomy and UX brought me to this work.
        I&apos;m growing toward software architecture and development.
      </p>
      </motion.div>
    
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline animate={false}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")