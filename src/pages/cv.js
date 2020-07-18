import React, { useEffect, useState } from 'react';

const Resume = () => {
  const [width, setWidth]=useState(1);
  const [height, setHeight]=useState(1);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight*0.98); 
  }, []);

  return(
    <div
      style={{
        display: 'block',
        margin: '0 auto',
        backgroundColor: '#2c2c2c',   
        overflowX: 'hidden', 
        overflowY: 'hidden',
      }}
    >
      <iframe
        width={width} 
        height={height} 
        src='https://www.docdroid.net/GnZBqxl/cv-nathan-ellstrand-pdf'
      >
      </iframe>
    </div>
  );
}

export default Resume; 