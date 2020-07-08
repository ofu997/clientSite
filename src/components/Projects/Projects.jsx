import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
// import { Container } from 'react-bootstrap';
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
      {/* <Container> */}
        {/* <div className="project-wrapper"> */}
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
                  {/* <h3 style={{ paddingLeft: '2%' }}>{ node.id }</h3> */}
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
          
          {/* original */}
          {/* {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                        style={{ boxShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }}
                      >
                        Read it
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })} */}
        {/* </div> */}
      { /*</Container> */ }
    </section>)}
  />
)

// const Projects = ({ data }) => {
//   const { projects } = useContext(PortfolioContext);

//   const [isDesktop, setIsDesktop] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth > 769) {
//       setIsDesktop(true);
//       setIsMobile(false);
//     } else {
//       setIsMobile(true);
//       setIsDesktop(false);
//     }
//   }, []);

//   return (
//     <section id="writings">
//       <Container>
//         <div className="project-wrapper">
//           <Title title="Projects" />
//           {/* card format */}
//           <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap-reverse', flexDirection: 'row-reverse' }}>
//             {
//               data.allWriting.edges.map( ({node}) =>
//                 <div style={{ width: '40%',  border: '2px solid yellow' }}>
//                   <h4>{node.date}</h4>
//                   <h4>{ node.title }</h4>
//                   <img src={node.image} alt='historical' />
//                   <p>{ node.description }</p>
//                     <a
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="cta-btn cta-btn--hero"
//                       href={url || '#!'}
//                       style={{ boxShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }}
//                     >
//                       Read it
//                     </a>
//                 </div>
//               )
//             }
//           </div> 
          
//           {projects.map((project) => {
//             const { title, info, info2, url, repo, img, id } = project;

//             return (
//               <Row key={id}>
//                 <Col lg={4} sm={12}>
//                   <Fade
//                     left={isDesktop}
//                     bottom={isMobile}
//                     duration={1000}
//                     delay={500}
//                     distance="30px"
//                   >
//                     <div className="project-wrapper__text">
//                       <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
//                       <div>
//                         <p>
//                           {info ||
//                             'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
//                         </p>
//                         <p className="mb-4">{info2 || ''}</p>
//                       </div>
//                       <a
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="cta-btn cta-btn--hero"
//                         href={url || '#!'}
//                         style={{ boxShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }}
//                       >
//                         Read it
//                       </a>

//                       {repo && (
//                         <a
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="cta-btn text-color-main"
//                           href={repo}
//                         >
//                           Source Code
//                         </a>
//                       )}
//                     </div>
//                   </Fade>
//                 </Col>
//                 <Col lg={8} sm={12}>
//                   <Fade
//                     right={isDesktop}
//                     bottom={isMobile}
//                     duration={1000}
//                     delay={1000}
//                     distance="30px"
//                   >
//                     <div className="project-wrapper__image">
//                       <a
//                         href={url || '#!'}
//                         target="_blank"
//                         aria-label="Project Link"
//                         rel="noopener noreferrer"
//                       >
//                         <Tilt
//                           options={{
//                             reverse: false,
//                             max: 8,
//                             perspective: 1000,
//                             scale: 1,
//                             speed: 300,
//                             transition: true,
//                             axis: null,
//                             reset: true,
//                             easing: 'cubic-bezier(.03,.98,.52,.99)',
//                           }}
//                         >
//                           <div data-tilt className="thumbnail rounded">
//                             <ProjectImg alt={title} filename={img} />
//                           </div>
//                         </Tilt>
//                       </a>
//                     </div>
//                   </Fade>
//                 </Col>
//               </Row>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export const query = graphql`
//   query {
//     allWriting {
//       edges {
//         node {
//           date
//           description
//           id
//           image
//           link
//           title
//         }
//       }
//     }
//   }
// `

export default Projects;
