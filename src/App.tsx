import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Publications from './components/sections/Publications';
import Workshops from './components/sections/Workshops';
import Hobbies from './components/sections/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Publications />
        <Workshops />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;