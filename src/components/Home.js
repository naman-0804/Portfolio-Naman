import React from 'react';
import photo from '../profile-pic.jpg';
import resume from '../Naman_srivastava.pdf'
function Home() {
  return (
    <div className="profile-container" style={{ }}>
      <div className="intro">
        <h1>I am Naman</h1>
        <h1>I am a Software Developer</h1>
        <h3>I am more passionate about developing new websites and applications</h3>
        <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer">
          <img align="center" src="https://skillicons.dev/icons?i=linkedin" alt="Naman" height="50" width="50" />
        </a> 
        
        <a href="https://github.com/un-identified" target="_blank" rel="noopener noreferrer">
          <img align="center" src="https://skillicons.dev/icons?i=github" alt="Naman" height="50" width="50" style={{ margin: '10px' }} />
        </a>
        <br></br><center>
        <a href={resume} download="Naman_Srivastava_Resume.pdf">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Download Resume</button>
        </a>
        </center>
      </div> 
      <div className="dp">
        <img src={photo} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;
