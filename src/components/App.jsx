import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import { aboutData, contactData, footerData, heroData } from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, contact, footer }}>
      <Hero />
      <About />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
