// import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import AboutImg from '../Image/AboutImg';
import Title from '../Title/Title';

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

  const paragraph1=`Hello! 
  I am a PhD Candidate in History and Arthur J. Schmitt Fellow at Loyola University Chicago, 
  and a Visiting Student Researcher at the University of California, Berkeley. Among various
  topics, I am interested in United States-Latin American transnational history,
  ideology, and borderlands. I am currently writing my dissertation on the political
  activities of the Unión Nacional Sinarquista, a right-wing Mexican Catholic organization, 
  in the United States during World War II. My work for my Masters in Latin American Studies at the 
  University of California, San Diego covered women\'s leadership in the Partido Liberal Mexicano while 
  the party was in exile in early twentieth century Los Angeles. I have also conducted 
  research and presented on the sanctuary movement of the 1980s.`;
  const paragraph2='Apart from academia, I am passionate about education and social justice. I enjoy eating (I\'m a foodie!), traveling and riding my bike in my free time. Please feel free to contact me with any questions.'

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
          <div className='about-wrapper__image' 
            // style={{ width: '30%' }}
          >
            <AboutImg isMobile={isMobile} filename="nathanAboutMe.jpg" alt="Me at the Billy Elliot musical!" />
          </div>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info" 
              style={{ 
                // width: '40%', 
                // minHeight: 350, 
                // alignItems: 'space-between', 
                // border: '' 
              }}
            >
              <p className="about-wrapper__info-text" style={{ textAlign: 'left', margin: '0 5%' }}>
                {paragraph1}
              </p>
              <br />
              <p className="about-wrapper__info-text" style={{ textAlign: 'left', margin: '0% 5%' }} >
                {paragraph2}
              </p>
            </div>
          </Fade>
        </div>
        <div style={{height: 100 }}></div>
        <p className='about-cta'>
          <span className="d-flex mt-3" style={{ margin: 'auto', justifyContent: 'center' }}>
            <a className="cta-btn cta-btn--cv" href="https://luc.academia.edu/NathanEllstrand/CurriculumVitae" rel='noopener noreferrer' target='_blank'>
              CV
            </a>
          </span>   
        </p>
      </div>
    </section>
  );
};

export default About;
