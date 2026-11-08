import { BrowserRouter } from "react-router-dom";
import {
  Expertise,
  Contact,
  Project,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  About,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-black">
            <div className="relative z-0">
              <StarsCanvas />
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
      </BrowserRouter>
    </>
  );
};

export default App;
