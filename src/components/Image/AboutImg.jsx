import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const AboutImg = ({ filename, alt, isMobile }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 550) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        mobile: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 225) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }        
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
      const mobileImage=data.mobile.edges.find((n) => n.node.relativePath.includes(filename));
      if (!image) return null;
      const imageFixed = image.node.childImageSharp.fixed;
      const mobileImageFixed = mobileImage.node.childImageSharp.fixed;
      if (isMobile) return <Img className="rounded shadow-lg" alt={alt} fixed={mobileImageFixed} />;
      return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />;
    }}
  />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
