// import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import AboutImg from '../Image/AboutImg';
import Title from '../Title/Title';
import aboutText from '../../text';
import { curriculumVitae } from '../../links';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about" style={{ backgroundColor: '#082567' }}>
      <div>
        <Title title="About Me" />
        <div className='aboutMeImageAndDescription' 
          style={{ 
            display: 'flex',
             margin: 'auto', 
             justifyContent: 'center' 
          }}
        >
          <div className='about-wrapper__image'>
            <AboutImg isMobile={isMobile} filename="nathanNewAboutMe.jpg" alt="Nathan Ellstrand's profile picture" />
          </div>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info" >
              <p className="about-wrapper__info-text" style={{ textAlign: 'left', margin: '0 5%', whiteSpace: 'pre-line'}}>
                {aboutText}
              </p>
            </div>
          </Fade>
        </div>
        <div style={{height: 100 }}></div>
        <p className='about-cta'>
          <span className="d-flex mt-3" style={{ margin: 'auto', justifyContent: 'center' }}>
            <a className="cta-btn cta-btn--cv" href={curriculumVitae} rel='noopener noreferrer' target='_blank'>
              CV
            </a>
          </span>   
        </p>
      </div>
    </section>
  );
};

export default About;
