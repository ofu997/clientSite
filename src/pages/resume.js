import React, { useEffect, useState } from 'react';
// import PortfolioContext from '../../context/context';

const Resume = () => {

  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth]=useState('');
  const [height, setHeight]=useState('');
  useEffect(() => {
    // if (window.innerWidth > 769) {
    //   setIsDesktop(true);
    //   setIsMobile(false);
    // } else {
    //   setIsMobile(true);
    //   setIsDesktop(false);
    // }
    setWidth(window.innerWidth);
    setHeight(window.innerHeight); 
  }, []);
  return(
    <object width={width} height={height} data="https://www.docdroid.net/llLbaOu/cv-nathan-ellstrand-pdf">
    </object>
  );
}

export default Resume; 