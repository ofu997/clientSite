import React from 'react';

const Picture = () => 
  <div 
    style={{ 
      backgroundImage: 'url(https://pbs.twimg.com/media/EZJJrAJXQAAf1VV?format=jpg&name=900x900)', 
      filter: 'sepia(50%)',
      backgroundRepeat  : 'no-repeat', 
      backgroundSize: 'cover', 
      backgroundAttachment: 'fixed', 
      height: 500 
    }}  
  >
  </div>

export default Picture;