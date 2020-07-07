import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
        {/* <div className="about-wrapper"> */}
          {/* <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col> */}
          {/* <Col > */}
          {/* md={6} sm={12} */}
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text" style={{ textAlign: 'left', margin: '0 5%' }} >
                  { paragraphOne ||
                    `Hello! I am a PhD candidate in History at Loyola University Chicago. Among various
                    topics, I am interested in United States-Latin American transnational history,
                    ideology, and borderlands. I am currently writing my dissertation on the political
                    activities of the Unión Nacional Sinarquista, a right-wing Mexican Catholic organization, 
                    in the United States during World War II. My work for my Masters in Latin American Studies at the 
                    University of California, San Diego covered women\'s leadership in the Partido Liberal Mexicano while 
                    the party was in exile in early twentieth century Los Angeles. I have also conducted 
                    research and presented on the sanctuary movement of the 1980s.`
                  }
                </p>
                <div style={{ height: 25, border: '' }}></div>
                <p className="about-wrapper__info-text" style={{ textAlign: 'left', margin: '0 5%' }} >
                  {paragraphThree || 'Apart from academia, I am passionate about education and social justice. I enjoy eating (I\'m a foodie!), traveling and riding my bike in my free time. Please feel free to contact me with any questions.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3" style={{ margin: '10% 5%' }}>
                    <a target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href='https://www.docdroid.net/llLbaOu/cv-nathan-ellstrand-pdf'
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          {/* </Col> */}
        
      </div>
    </section>
  );
};

export default About;
