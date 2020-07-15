// import { graphql, StaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Nathan from '../../../src/images/nathanAboutMe.jpg';

const Picture = () => {
  // const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [height, setHeight] = useState(0);

  const imageStyle=isMobile?
    {
      backgroundSize: 'auto 100%', 
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat', 
      backgroundAttachment: 'initial',
      // backgroundImage: 'url(https://pbs.twimg.com/media/EZJJrAJXQAAf1VV?format=jpg&name=900x900)',
      backgroundImage: `url(${Nathan})`,
      height: `${height}px`,
      display: 'none',
    }:
    {
      backgroundSize: 'cover', 
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat', 
      backgroundAttachment: 'fixed',
      // backgroundImage: 'url(https://pbs.twimg.com/media/EZJJrAJXQAAf1VV?format=jpg&name=900x900)',
      backgroundImage: `url(${Nathan})`,
      height: `${height}px`,
    };
  useEffect(() => {
    if (window.innerWidth > 769) {
      // setIsDesktop(true);
      setIsMobile(false);
      setHeight(750);
    } else {
      setIsMobile(true);
      setHeight(550); 
      // setIsDesktop(false);
    }
  }, []);
  // const height=isMobile? 550:750;

  return(
    <>
      <div 
        // style={{ 
        //   backgroundImage: 'url(https://pbs.twimg.com/media/EZJJrAJXQAAf1VV?format=jpg&name=900x900)', 
        //   filter: 'sepia(50%)',
        //   backgroundRepeat  : 'no-repeat', 
        //   backgroundSize: 'cover', 
        //   backgroundAttachment: 'fixed', 
        //   height: `${height}px`
        // }}  
        style={imageStyle}
      >
      </div>
    </>
  )
}

export default Picture;