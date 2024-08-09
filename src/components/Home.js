import React from 'react';

import photo from '../Images/profile-pic.jpg';
import resume from '../Naman_srivastava.pdf';

function Home() {


  return (
    <div className="profile-container">
      <div className="intro">
        <h1>I am Naman</h1>
        <h1>I am a Software Developer</h1>
        <h3>I am more passionate about developing new websites and applications</h3>
        <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" height="50" width="50" />
        </a> 
        
        <a href="https://github.com/un-identified" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=github" alt="GitHub" height="50" width="50" style={{ margin: '10px' }} />
        </a>
        <div>
          <a href={resume} download="Naman_Srivastava.pdf">
            <button>Download Resume</button>
          </a>
        </div>
      </div> 
      <div className="dp">
        
      </div>
    </div>
  );
}

export default Home;
