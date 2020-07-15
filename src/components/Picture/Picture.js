import React, { useEffect, useState } from 'react';
import Nathan from '../../../src/images/nathanAboutMe.jpg';

const Picture = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [height, setHeight] = useState(0);

  const imageStyle=isMobile?
    {
      backgroundSize: 'auto 100%', 
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat', 
      backgroundAttachment: 'initial',
      backgroundImage: `url(${Nathan})`,
      height: `${height}px`,
      display: 'none',
    }:
    {
      backgroundSize: 'cover', 
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat', 
      backgroundAttachment: 'fixed',
      backgroundImage: `url(${Nathan})`,
      height: `${height}px`,
    };
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsMobile(false);
      setHeight(750);
    } else {
      setIsMobile(true);
      setHeight(550); 
    }
  }, []);

  return(
    <>
      <div 
        style={imageStyle}
      >
      </div>
    </>
  )
}

export default Picture;