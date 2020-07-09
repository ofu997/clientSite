import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import { aboutData, contactData, footerData, heroData, projectsData } from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Picture2 from './Picture/Picture2';
import Projects from './Projects/Projects';

// navbar, __________________
// pics as variables, _______
// firestore data____________
// responsive cards__________

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      {/* <Picture /> */}
      <Picture2 />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </PortfolioProvider>
  );
}

export default App;
