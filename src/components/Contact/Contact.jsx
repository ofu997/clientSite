/* eslint-disable prettier/prettier */
import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import { academia, email, linkedin, blueSky } from '../../links';
import academiaImg from '../../images/academia.svg';
import blueSkyImage from '../../images/Bluesky_Logo.svg';

const Contact = () => {
  const networksArray = [
    {
      id: 1,
      name: blueSkyImage,
      url: blueSky
    },
    {
      id: 2,
      name: 'linkedin',
      url: linkedin
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
                    height={40} 
                    width={40}
                  />
                ) : (
                  <img src={name} height="40" width="40" alt="contact icon" />
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
