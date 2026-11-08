import { lazy } from "react";
import ClientOnly from "./components/ClientOnly";
import {
  Expertise,
  Contact,
  Project,
  Hero,
  Navbar,
  Works,
  About,
} from "./components";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-black">
        <div className="relative z-0">
          <ClientOnly fallback={<div aria-hidden="true" className="absolute inset-0 bg-black z-[-1]" />}>
            <StarsCanvas />
          </ClientOnly>
          <Hero />
        </div>
        <Navbar />
        <Expertise />
        <Project />
        <Works />
        <About />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
