import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
// import Img from 'gatsby-image';
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
          {/* <h2>background from picture 2</h2> */}
        </BackgroundImage>
      );
    }}
  />

  // original
  // return(
  //   <section id='picture2'>
  //     <div 
  //       style={{ 
  //         // backgroundImage: 'url(https://pbs.twimg.com/media/EZJJrAJXQAAf1VV?format=jpg&name=900x900)', 
  //         // filter: 'sepia(50%)',
  //         // backgroundRepeat  : 'no-repeat', 
  //         // backgroundSize: 'cover', 
  //         backgroundAttachment: 'fixed', 
  //         height: `${height}px`
  //       }}  
  //       // style={imageStyle}
  //     >
  //       <BackgroundImage 
  //         fluid={data.file.childImageSharp.fluid} 
  //       >
  //       </BackgroundImage>
  //     </div>
  //   </section>
  // )
)

export default Picture2;