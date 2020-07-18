import React, { useEffect, useState } from 'react';

const Resume = () => {
  const [width, setWidth]=useState(1);
  const [height, setHeight]=useState(1);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight*0.99); 
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
      <object 
        width={width} 
        height={height} 
        // data="https://www.docdroid.net/llLbaOu/cv-nathan-ellstrand-pdf"
        data='https://www.docdroid.net/GnZBqxl/cv-nathan-ellstrand-pdf'
        // data='https://www.scribd.com/document/469542708/CVupdatedNathan-Ellstrand'
      >
      </object>
    </div>
  );
}

export default Resume; 