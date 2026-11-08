import { MotionConfig } from "framer-motion";
import { Head } from "vite-react-ssg";
import CosmosBackground from "./components/CosmosBackground";
import {
  Expertise,
  Contact,
  Project,
  Hero,
  Navbar,
  Works,
  About,
} from "./components";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Head>
        <title>Sherezade Maqueda | Ecommerce, CRO &amp; Web Developer</title>
        <meta name="description" content="I combine ecommerce, CRO and web development with A/B testing, martech, data, automation and cloud as I grow toward software architecture and development." />
        <link rel="canonical" href="https://mlsherezade.com/" />
        <meta property="og:title" content="Sherezade Maqueda | Ecommerce, CRO & Web Developer" />
        <meta property="og:description" content="I combine ecommerce, CRO and web development with A/B testing, martech, data, automation and cloud as I grow toward software architecture and development." />
        <meta property="og:url" content="https://mlsherezade.com/" />
        <meta name="twitter:title" content="Sherezade Maqueda | Ecommerce, CRO & Web Developer" />
        <meta name="twitter:description" content="I combine ecommerce, CRO and web development with A/B testing, martech, data, automation and cloud as I grow toward software architecture and development." />
        <meta name="twitter:url" content="https://mlsherezade.com/" />
      </Head>
    <div className="relative z-0 bg-primary">
      <CosmosBackground />
      <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
      <main id="main-content">
        <Hero />
        <Project />
        <Works />
        <Expertise />
        <About />
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
