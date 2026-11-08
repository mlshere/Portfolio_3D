import { MotionConfig } from "framer-motion";
import SquareBackground from "./components/SquareBackground";
import {
  Expertise,
  Contact,
  Project,
  Hero,
  Navbar,
  Works,
  About,
  Blog,
} from "./components";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
    <div className="relative z-0 bg-primary">
      <SquareBackground />
      <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
      <main id="main-content">
        <Hero />
        <Project />
        <Works />
        <Expertise />
        <About />
        <Blog />
        <Contact />
      </main>
        <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/10 px-6 py-8 text-sm text-secondary sm:px-16">
          <p>Sherezade Maqueda</p>
          <a href="#work">Back to selected work</a>
        </footer>
      </div>
    </MotionConfig>
  );
};

export default App;
