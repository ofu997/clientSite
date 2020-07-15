import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Title from '../Title/Title';

const Projects = () => (
  <StaticQuery 
    query={graphql`
      query {
        allWriting {
          edges {
            node {
              date
              description 
              id
              image
              link
              title
            }
          }
        }
      }
    `}

    render = {data => (
      <section id="writings" style={{ backgroundColor: '#fafafa' }}>
          <Title title="Writing" />
          {/* card format */}
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap-reverse', flexDirection: 'row-reverse' }}>
            {
              data.allWriting.edges.map( ({node}) =>
                <div 
                  className='cardContainer'
                  style={{ 
                    padding: '1%',  
                    boxShadow: '2px 0px 4px gray, 0px 2px 2px gray, -1px 0px 4px white, 0px -1px 2px white' ,
                    textAlign: 'left',
                    marginTop: '2%',
                    marginBottom: '2%',
                  }}
                >
                  <h5 style={{ paddingLeft: '2%' }}>{node.date}</h5>
                  <h5 
                    style={{ 
                      paddingLeft: '2%', 
                      textTransform: 'uppercase', 
                      letterSpacing: 1, 
                      wordWrap: 'break-word', 
                      fontSize: 'calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))' 
                    }}
                  >
                    { node.title }
                  </h5>
                  <img src={node.image} alt='historical' 
                    style = {{ 
                      maxWidth: '90%', 
                      maxHeight: 500 ,
                      display: 'block',
                      margin: 'auto',
                    }} 
                  />
                  <p 
                    style={{ 
                      paddingLeft: '2%',
                      marginTop: '2%',
                    }}
                  >
                    { node.description }
                  </p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href={ node.link }
                      style={{ 
                        boxShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white',
                        margin: '5% 4%',
                      }}
                    >
                      Read it
                    </a>
                </div>
              )
            }
          </div> 
    </section>)}
  />
)

export default Projects;
