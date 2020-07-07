import React, { useEffect, useState } from 'react';

const Picture = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      // setIsMobile(false);
    } else {
      // setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  const height=isDesktop? 750:400;
  console.log(height);
  return(
    <>
      <div 
        style={{ 
          backgroundImage: 'url(https://pbs.twimg.com/media/EZJJrAJXQAAf1VV?format=jpg&name=900x900)', 
          filter: 'sepia(50%)',
          backgroundRepeat  : 'no-repeat', 
          backgroundSize: 'cover', 
          backgroundAttachment: 'fixed', 
          height: `${height}px`
        }}  
      >
      </div>
      {/* <p>{height}</p> */}
    </>
  );
}

export default Picture;