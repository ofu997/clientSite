import React, { useEffect } from 'react';
import Title from '../Title/Title';

const Twitter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);    
  }, []);
  return(
  <>
    <section id='twitter' className="twitterContainer" style={{ backgroundColor: '#fafafa' }}
      style={{  
        display: 'block', 
        margin: '50px auto', 
        maxWidth: 650, 
      }}
    >
      <a href='https://twitter.com/nellstra' target="_blank" rel="noopener noreferrer"><Title title='Recent Twitter Activity' /></a>
      <div className="twitter-embed" 
      >
        <div 
        >
          <a
            className="twitter-timeline"
            data-theme="light"
            data-tweet-limit="6"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/nellstra"
          >
          </a>
        </div>
      </div>
    </section>  
  </>
  )
}
export default Twitter;