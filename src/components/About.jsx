import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';

const About = () => {
  const current = experiences[experiences.length - 1];
  return (
    <>
      <p className={styles.sectionSubText}>About me</p>
      <h2 className={styles.sectionHeadText}>A different path into tech</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-secondary">
          <p>I&apos;m a marketing data analytics specialist and ecommerce, CRO and web developer. I work across A/B testing, martech, data, automation and cloud.</p>
          <p>My background in media, gastronomy and UX shapes how I approach problems. I combine self-taught skills in JavaScript, React, SQL and Python with a data analytics bootcamp, and I&apos;m growing toward software architecture.</p>
        </div>
        <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="font-mono text-xs text-[#c5a6bd]">{current.date}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{current.title}</h3>
          <p className="mt-1 text-secondary">{current.company}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-secondary">
            {current.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      </div>
      <details className="mt-6 rounded-2xl border border-white/10">
        <summary className="cursor-pointer rounded-2xl p-5 font-medium text-white">Explore my earlier journey</summary>
        <ol className="grid gap-6 border-t border-white/10 p-6 md:grid-cols-2">
          {[...experiences.slice(0, -1)].reverse().map((experience) => (
            <li key={experience.title}>
              <p className="font-mono text-xs text-[#c5a6bd]">{experience.city_name || 'Data analytics'}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{experience.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-secondary">
                {experience.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </details>
    </>
  );
};

export default SectionWrapper(About, "about");
