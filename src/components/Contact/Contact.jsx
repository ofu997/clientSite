import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import { academia, email } from '../../links';
import academiaImg from '../../images/academia.svg';
import x from '../../images/x.svg';

const Contact = () => {
  const networksArray = [
    {
      id: 1,
      name: x,
      url: 'https://twitter.com/nellstra',
    },
    {
      id: 2,
      name: 'linkedin',
      url: 'https://linkedin.com/in/nathan-ellstrand-070a9611/',
    },
    {
      id: 3,
      name: academiaImg,
      url: academia,
    },
  ];

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <div style={{ height: 100 }} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--cv"
              href={`mailto:${email}`}
            >
              Email
            </a>
          </div>
        </Fade>

        <div style={{ height: 100 }} />
        <div className="social-links">
          {networksArray.map((network) => {
            const { id, name, url } = network;
            return (
              <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                {id === 2 ? (
                  <div
                    className={`fa fa-${name || 'refresh'} fa-inverse`}
                    style={{ fontSize: '40px' }}
                  />
                ) : (
                  <img src={name} height="30" width="30" alt="linkedin icon" />
                )}
              </a>
            );
          })}
        </div>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <hr />
      </Container>
    </section>
  );
};

export default Contact;
