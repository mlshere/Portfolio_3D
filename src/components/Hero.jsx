import { styles } from "../styles";

const Hero = () => (
  <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-36 sm:px-16 sm:pb-24 sm:pt-44">
    <p className={styles.sectionSubText}>Development · Data · Experimentation</p>
    <h1 className={`${styles.heroHeadText} max-w-4xl`}>
      Analytic thinking.<br />
      <span className="text-[#c5a6bd]">Technical execution.</span>
    </h1>
    <p className={`${styles.heroSubText} mt-6 max-w-2xl`}>
      I&apos;m Sherezade. I connect development, data and experimentation
      to improve digital experiences.
    </p>
    <div className="mt-8 flex flex-wrap gap-4">
      <a href="#work" className="rounded-full bg-[#c5a6bd] px-6 py-3 font-semibold text-[#0b0c10] transition-colors hover:bg-[#dfc7d8]">
        Explore my work
      </a>
      <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/5">
        Get in touch
      </a>
    </div>
    <p className="mt-10 font-mono text-xs text-secondary">Shopify / WordPress / React / Python / SQL / Google Cloud</p>
  </section>
);

export default Hero;
