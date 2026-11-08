import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import braineffect from '../assets/braineffect.webp';
import bVisual from '../assets/b-visual.webp';
import terapiaOnline from '../assets/terapia-online.webp';
import lobePreview from '../assets/lobe-lokal.webp';
import braineffectSmall from '../assets/braineffect-640.webp';
import bVisualSmall from '../assets/b-visual-640.webp';
import terapiaOnlineSmall from '../assets/terapia-online-640.webp';
import lobeSmall from '../assets/lobe-lokal-640.webp';

const cmsProjects = [
  {
    name: "Braineffect",
    description: "Ecommerce development, CRO experiments and martech integrations.",
    image: braineffect,
    smallImage: braineffectSmall,
    role: "Technical ecommerce management and development",
    deliverable: "CRO experiments, martech integrations and technical implementation.",
    projectUrl: "https://www.brain-effect.com/",
    platform: "Shopify",
  },
  {
    name: "Lobe Lokal",
    description: "A website for a Berlin community space, canteen and events.",
    image: lobePreview,
    smallImage: lobeSmall,
    role: "WordPress website implementation",
    deliverable: "A website presenting the space, canteen and events.",
    projectUrl: "https://lobeblock.de/",
    platform: "WordPress",
  },
  {
    name: "B-Visual",
    description: "A designer's portfolio showcasing creative work and services.",
    image: bVisual,
    smallImage: bVisualSmall,
    role: "WordPress website implementation",
    deliverable: "A designer portfolio presenting creative work and services.",
    projectUrl: "https://b-visual.es/",
    platform: "WordPress",
  },
  {
    name: "Terapia Online en Español",
    description: "A website presenting online therapy services in Spanish.",
    image: terapiaOnline,
    smallImage: terapiaOnlineSmall,
    role: "WordPress website implementation",
    deliverable: "A Spanish-language website presenting therapy services.",
    projectUrl: "https://terapiaonlineenespanol.com/",
    platform: "WordPress",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(cmsProjects[0]);
  const reduceMotion = useReducedMotion();
  const domain = new URL(selectedProject.projectUrl).hostname;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected work</p>
        <h2 className={styles.sectionHeadText}>CMS & Ecommerce Websites</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
          I build and maintain websites with Shopify and WordPress, combining
          technical implementation, content management and user experience.
          My work spans ecommerce stores, creative portfolios and service websites.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start">
        <div className="space-y-8">
          {["Shopify", "WordPress"].map((platform) => (
            <div key={platform}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#c5a6bd]">
                {platform}
              </h3>
              <div className="space-y-2">
                {cmsProjects.filter((project) => project.platform === platform).map((project) => (
                  <button
                    key={project.name}
                    type="button"
                    aria-pressed={selectedProject.name === project.name}
                    aria-controls="cms-project-preview"
                    onClick={() => setSelectedProject(project)}
                    className={`w-full rounded-2xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a6bd] ${
                      selectedProject.name === project.name
                        ? "border-[#ac829e] bg-[#ac829e]/15"
                        : "border-white/10 bg-white/5 hover:border-[#ac829e]/60 hover:bg-white/10"
                    }`}
                  >
                    <span className="block text-lg font-semibold text-white">{project.name}</span>
                    <span className="mt-1 hidden text-sm leading-relaxed text-secondary lg:block">{project.description}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="cms-project-preview" className="min-w-0" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedProject.name}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="overflow-hidden rounded-2xl border border-white/15 bg-[#121019]"
            >
              <div className="flex items-center gap-4 border-b border-white/10 px-5 py-3">
                <div aria-hidden="true" className="flex gap-1.5">
                  {[0, 1, 2].map((dot) => (
                    <span key={dot} className="h-2 w-2 rounded-full bg-[#ac829e]/60" />
                  ))}
                </div>
                <span className="truncate text-xs text-secondary">{domain}</span>
              </div>
              <div className="aspect-[16/10] bg-black">
                <img
                  src={selectedProject.image}
                  srcSet={`${selectedProject.smallImage} 640w, ${selectedProject.image} 1280w`}
                  sizes="(min-width: 1024px) 750px, (min-width: 640px) calc(100vw - 128px), calc(100vw - 48px)"
                  alt={`${selectedProject.name} website screenshot`}
                  className="h-full w-full object-contain"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                <p className="mt-2 text-secondary">{selectedProject.description}</p>
                <dl className="mt-5 grid gap-4 border-t border-white/10 pt-5 text-sm sm:grid-cols-2">
                  <div><dt className="font-medium text-white">My role</dt><dd className="mt-1 leading-relaxed text-secondary">{selectedProject.role}</dd></div>
                  <div><dt className="font-medium text-white">What I built</dt><dd className="mt-1 leading-relaxed text-secondary">{selectedProject.deliverable}</dd></div>
                </dl>
                <a
                  href={selectedProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${selectedProject.name} website`}
                  className="mt-6 inline-flex rounded-full bg-[#c5a6bd] px-6 py-3 font-semibold text-[#0b0c10] transition-colors hover:bg-[#dfc7d8]"
                >
                  Visit website
                  <svg aria-hidden="true" className="ml-3 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "work");
