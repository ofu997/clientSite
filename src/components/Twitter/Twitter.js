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
  {/* <iframe title='widget 'width="430" height="500" src='https://twitter.com/nellstra'frameborder="0"></iframe>
  <a class="twitter-timeline" data-height="600" href="https://twitter.com/nellstra?ref_src=twsrc%5Etfw">Tweets by nellstra</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
    <section className="twitterContainer" style={{ maxHeight: 700, backgroundColor: '#fafafa' }}
      style={{  
        display: 'block', 
        margin: '50px auto', 
        maxHeight: 700, 
        maxWidth: 650, 
        // border: '2px solid black' 
      }}
    >
      <a href='https://twitter.com/nellstra' target="_blank" rel="noopener noreferrer"><Title title='Recent Twitter Activity' /></a>
      <div className="twitter-embed" 
        // style={{ display: 'flex', flexWrap: 'wrap', border: '2px solid green' }}
      >
        <div 
          // style={{ width: '20%', border: '2px solid gold' }}
        >
          <a
            className="twitter-timeline"
            data-theme="light"
            data-tweet-limit="6"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/nellstra"
          >
            {/* Tweets by HeyMarkKop */}
          </a>
        </div>
      </div>
    </section>  
  </>
  )
}
export default Twitter;