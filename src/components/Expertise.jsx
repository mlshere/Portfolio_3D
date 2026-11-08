import { services } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Expertise = () => (
  <>
    <p className={styles.sectionSubText}>How I work</p>
    <h2 className={styles.sectionHeadText}>Expertise that connects the dots</h2>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {services.map((service) => (
        <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div aria-hidden="true" className="mb-6 text-[#c5a6bd]">{service.icon}</div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-secondary">{service.description}</p>
        </article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Expertise, "expertise");
