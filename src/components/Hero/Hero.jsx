import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import bg1 from '../../images/nathanBackground1.jpg';
import bg2 from '../../images/nathanBackground2.jpg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [image, setImage] = useState('');

  const imageStyle = isMobile? 
    {
      backgroundAttachment: 'initial',
      backgroundSize: 'auto 100%',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${image})`,
    }:
    {
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${image})`,
    };

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    const random=Math.floor((Math.random()*2)+1);
    if (random===1) { setImage(bg1) }
    if (random===2) { setImage(bg2) }
  }, []);

  const data=useStaticQuery(graphql`
    query {
      file(relativePath:  { eq: "nathanWallpaper.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }      
    }
  `)

  return (
    <section 
      id="hero" 
      className="jumbotron"
      style={imageStyle}
    >
      <Container >
        {
          isMobile &&
          <header style={{ fontSize: 'calc(5px + 2vmin)', paddingTop: '2em', paddingBottom: 12, fontWeight: '200' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <a href='#about'><p style={{ textShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }} >About</p></a>
            <a href='#twitter'><p style={{ textShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }} >Twitter</p></a>
            <a href='#contact'><p style={{ textShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }} >Contact</p></a>
            </nav>
          </header>
        }
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div style={{ marginTop: '15%' }}></div>
          <h1 className="hero-title" 
            style={{ 
              marginBottom: '15%', 
              textAlign: 'center' 
            }}
          >
            <span 
              className="text-color-main" 
              style={{ 
                textShadow: '1px 0px 1px white, 0px 1px 1px white, -1px 0px 1px white, 0px -1px 1px white',
              }}>
                {name || 'Nathan Ellstrand'}
            </span>
            <br />
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta" 
            style={{ 
              justifyContent: 'center',  
              color: 'black', 
              textShadow: '1px 0px 1px white, 0px 1px 1px white, -1px 0px 1px white, 0px -1px 1px white',
            }}
          >
            <span className="cta-btn cta-btn--hero"
              style={{ 
                boxShadow: '1px 0px 1px white, 0px 1px 1px white, -1px 0px 1px white, 0px -1px 1px white',
              }}
            >
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
