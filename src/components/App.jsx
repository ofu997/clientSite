import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import { aboutData, contactData, footerData, heroData, projectsData } from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Picture from './Picture/Picture';
import Projects from './Projects/Projects';
import Twitter from './Twitter/Twitter';


// navbar, __________________
// pics as variables, _______
// firestore data____________
// responsive cards__________

// -Is it possible for me to change the site myself from the backend or would I need to consult you each time? 'Writing' section: Yes Other sections: not sure
// -Photos: Please use the first one attached under "About me."  You can use any of the other ones (of your liking) for the big image sections.in process-Please remove the star icon above my name.Yes-"About Me:" Please replace the resume with my CV and center the box directly under "CV."  Please have the description about me below that.Not sure what you mean-I don't think the "Writing" section is needed; at least for now. Ah.
// -"Contact:" Please get rid of " Would you like to work with me? Awesome!"  Please replace "Let's Talk" with "Email."  Please get rid of Instagram.  Could you add an icon/link to my Academia.edu account and replace it with that?in process
// -By chance, would it be possible to embed a Twitter feed? Yes

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
      <Picture />
      <Projects />
      <Contact />
      {/* <Picture2 /> */}
      {/* <Footer /> */}
      <Twitter />
    </PortfolioProvider>
  );
}

export default App;
