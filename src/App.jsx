import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom';
import { Expertise, Contact, Project, Hero, Navbar, Works, StarsCanvas, About} from './components';

const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className='bg-hero-pattern bg-repeat bg-cover bg-center'>
              <Navbar />
              <Hero />
            
            <Expertise />
            
            <Project />
            <Works />
            <About />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
