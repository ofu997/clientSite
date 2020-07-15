import React, { useEffect, useState } from 'react';

const Resume = () => {
  const [width, setWidth]=useState('');
  const [height, setHeight]=useState('');
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight*0.99); 
  }, []);

  return(
    <div
      style={{
        display: 'block',
        margin: 'auto',
        backgroundColor: '#2c2c2c',   
      }}
    >
      <object 
        width={width} 
        height={height} 
        data="https://www.docdroid.net/llLbaOu/cv-nathan-ellstrand-pdf"
        style={{ 
          overflowX: 'hidden', 
          overflowY: 'hidden',
        }}
      >
      </object>
    </div>
  );
}

export default Resume; 