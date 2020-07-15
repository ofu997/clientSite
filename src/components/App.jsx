import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import { aboutData, contactData, footerData, heroData, projectsData } from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Twitter from './Twitter/Twitter';

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
      <Twitter />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
