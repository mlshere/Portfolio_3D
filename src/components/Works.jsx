import { useState } from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects, filters } from '../constants';

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredProjects = projects.filter((project) =>
    selectedCategory === 'all' || project.category.includes(selectedCategory)
  );

  return (
    <>
      <p className={styles.sectionSubText}>Independent projects</p>
      <h2 className={styles.sectionHeadText}>Development & data</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary">
        Applications and analyses built to explore ideas, solve problems and deepen my technical practice.
      </p>
      <div aria-label="Filter projects" role="group" className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter.id} type="button"
            aria-pressed={selectedCategory === filter.id}
            aria-controls="independent-projects"
            onClick={() => setSelectedCategory(filter.id)}
            className={`rounded-full border px-4 py-3 text-sm transition-colors ${selectedCategory === filter.id ? 'border-[#c5a6bd] bg-[#c5a6bd]/15 text-white' : 'border-white/10 text-secondary hover:border-white/30 hover:text-white'}`}>
            {filter.title}
          </button>
        ))}
      </div>
      <p role="status" className="mt-4 text-sm text-secondary">{filteredProjects.length} projects</p>
      <div id="independent-projects" className="projects mt-4 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article key={project.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-[#ac829e]/50">
            <div className="aspect-[16/9] overflow-hidden bg-[#16171e]">
              <img src={project.image} alt={`${project.name} project preview`} loading="lazy" decoding="async"
                className="h-full w-full object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-[1.02]" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{project.description}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div><dt className="font-medium text-white">My role</dt><dd className="mt-1 text-secondary">{project.role}</dd></div>
                <div><dt className="font-medium text-white">What I built</dt><dd className="mt-1 text-secondary">{project.deliverable}</dd></div>
              </dl>
              <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag.name} className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-secondary">{tag.name}</li>
                ))}
              </ul>
              <a href={project.source_code_link} target="_blank" rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="mt-6 inline-block py-2 text-sm font-medium text-[#c5a6bd] hover:text-white">
                View source code
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
