import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

const Picture2 = () => (
  <StaticQuery 
    query={graphql`
      query {
        file(relativePath:  { eq: "nathanColombia.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

    render={data => {
      return (
        <BackgroundImage 
          className='backgroundImage'
          fluid={data.file.childImageSharp.fluid} 
        >
        </BackgroundImage>
      );
    }}
  />
)

export default Picture2;