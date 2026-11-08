import { motion } from "framer-motion";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className={styles.heroHeadText}>
          Hi, I&apos;m Sherezade
        </h1>
        <motion.p className="sm:px-16 px-6 sm:py-16 py-10">
        <p className={styles.heroSubText}>
          Data analyst and web developer interested in understanding the stories data tells through code.
        </p>
        </motion.p>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <a href="#expertise">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
