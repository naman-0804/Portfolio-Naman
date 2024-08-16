import React from 'react';
import resume from '../Naman_srivastava.pdf';

function Home() {
  const linksStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    padding: '20px', // Add padding
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    maxWidth: '400px', // Limit the width
    margin: '20px auto' // Center block horizontally
  };

  return (
    <div className="profile-container">
      <div className="details">
        <h1>I am Naman</h1>
        <h1>I am a Software Developer</h1>
        <h3>
          <p>I love working on new problems and designing their solutions, I love solving bugs, fixing the code.</p>
          <p><span style={{ color: '#007bff' }}>Backend</span> or <span style={{ color: '#007bff' }}>APIs</span>, they all excite me.</p>
          <p>I love taking part in <span style={{ color: '#007bff' }}>Hackathons</span> as they force me to think differently and invent something totally unique, it also helps me expand my knowledge even more and improves my thinking ability.</p>
          <p>I am looking forward to jobs offering me a <span style={{ color: '#007bff' }}>developer role</span>.</p>
          <p>I have a good level of knowledge on <span style={{ color: '#007bff' }}>Databases (MongoDB)</span>, <span style={{ color: '#007bff' }}>Backend (Flask)</span>, <span style={{ color: '#007bff' }}>APIs</span>, <span style={{ color: '#007bff' }}>Frontend (React Js)</span>, and <span style={{ color: '#007bff' }}>Amazon Web Services</span>.</p>
          <p>I am also interested in <span style={{ color: '#007bff' }}>cloud computing</span>, <span style={{ color: '#007bff' }}>Machine Learning</span>, and currently expanding my knowledge in those domains.</p>
        </h3>
      </div>
      <div className="links" style={linksStyle}>
        <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" height="50" width="50" style={{ margin: '10px' }} />
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
    </div>
  );
}

export default Home;
