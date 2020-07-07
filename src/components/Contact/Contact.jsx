import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact, footer } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  // const { networks } = footer; 

  const networksArray = [
    {
      id: 1,
      name: 'twitter', 
      url: 'https://twitter.com/nellstra',
    }, 
    {
      id: 2,
      name: 'linkedin',
      url: 'https://linkedin.com/in/nathan-ellstrand-070a9611/',
    },
    {
      id: 3,
      name: 'instagram',
      url: 'https://instagram.com/somedudenamenate/',
    },
    // {
    //   id: 4,
    //   name: 'snapchat',
    // },
    // {
    //   id: 5,
    //   name: 'facebook',
    // },
    // {
    //   id: 6,
    //   name: 'skype',
    // }
  ]

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href='mailto:nellstrand@luc.edu'
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {
            networksArray.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
      </Container>
    </section>
  );
};

export default Contact;
