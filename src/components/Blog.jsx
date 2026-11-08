import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Blog = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Ideas & insights</p>
      <h2 className={styles.sectionHeadText}>Blog</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
        A space for practical lessons, experiments and reflections on ecommerce,
        web development and data. I will share what I learn while building,
        testing and improving digital experiences.
      </p>
    </motion.div>

    <div className="mt-10 overflow-hidden rounded-2xl border border-white/15 bg-[#121019]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4 sm:px-8">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-[#c5a6bd]">
          Latest entries
        </h3>
        <span className="rounded-full border border-[#ac829e]/40 px-3 py-1 text-xs text-secondary">
          Coming soon
        </span>
      </div>
      <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-center">
        <div aria-hidden="true" className="flex items-center justify-center rounded-xl bg-gradient-to-br from-[#35283c] to-[#171421] p-10">
          <svg className="h-20 w-20 text-[#c5a6bd]" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="16" y="10" width="48" height="60" rx="6" />
            <path d="M27 26h26M27 36h26M27 46h18M27 56h12" />
          </svg>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-white sm:text-3xl">The first chapter is still ahead</h4>
          <p className="mt-3 max-w-xl leading-relaxed text-secondary">
            No articles published yet. This space will grow with insights from
            my projects and the questions I explore along the way.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default SectionWrapper(Blog, "blog");
