import React from 'react';
import resume from '../Naman_srivastava.pdf';

function Home() {
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Slight gray background for the whole container
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
  };

  const linksStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    padding: '20px', // Add padding
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    width: '100%', // Take the full width of the container
    marginBottom: '20px', // Add some space between the links and the profile picture
  };

  const dpstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    padding: '20px', // Add padding
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    width: '100%', // Take the full width of the container
  };

  const imgStyle = {
    maxWidth: '100%', // Scale the image to fit within the box
    height: 'auto', // Maintain aspect ratio
    borderRadius: '2px', // Optional: Match the box’s rounded corners
  };

  return (
    
    <div className="profile-container" >
      <div className="details">
        <center>
        <h1>I am Naman</h1>
        <h1>I am a Software Developer</h1>
        </center>
        <h3>
          <ul>
          <li><p>I love working on new problems and designing their solutions, I love solving bugs, fixing the code.</p></li>
          <li><p><span style={{ color: '#007bff' }}>Backend</span> or <span style={{ color: '#007bff' }}>APIs</span>, they all excite me.</p></li>
          <li><p>I love taking part in <span style={{ color: '#007bff' }}>Hackathons</span> as they force me to think differently and invent something totally unique, it also helps me expand my knowledge even more and improves my thinking ability.</p></li>
          <li><p>I am looking forward to jobs offering me a <span style={{ color: '#007bff' }}>developer role</span>.</p></li>
          <li><p>I have a good level of knowledge on <span style={{ color: '#007bff' }}>Databases (MongoDB)</span>, <span style={{ color: '#007bff' }}>Backend (Flask)</span>, <span style={{ color: '#007bff' }}>APIs</span>, <span style={{ color: '#007bff' }}>Frontend (React Js)</span>, and <span style={{ color: '#007bff' }}>Amazon Web Services</span>.</p></li>
          <li><p>I am also interested in <span style={{ color: '#007bff' }}>cloud computing</span>, <span style={{ color: '#007bff' }}>Machine Learning</span>, and currently expanding my knowledge in those domains.</p></li>
          </ul>
        </h3>
      </div>
      <div style={containerStyle}  >
        <div style={linksStyle}>
          <div>
            <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" height="50" width="50" style={{ margin: '10px' }} />
            </a>
            <a href="https://github.com/un-identified" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" height="50" width="50" style={{ margin: '10px' }} />
            </a>
          </div>
          <div>
            <a href="https://www.geeksforgeeks.org/user/naman1608/" target="_blank" rel="noopener noreferrer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6xTYgBnDdDx4_NlISNyHkN1LtWogCOcYop0yMwFt1aNkqfgfbC-jA2Y8XsxZajJ8Pf0" alt="GeeksforGeeks" height="50" width="50" style={{ margin: '10px' }} />
            </a>
            <a href="https://takeuforward.org/profile/naman160804" target="_blank" rel="noopener noreferrer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRsQPKmkjRLVBygaXHIMKgl_rO3q8T8aQaA&s" alt="TakeUForward" height="50" width="50" style={{ margin: '10px' }} />
            </a>
          </div>
          <div>
            <a href={resume} download="Naman_Srivastava.pdf">
              <button>Download Resume</button>
            </a>
          </div>
        </div>
        <div style={dpstyle}>
          <img src="https://avatars.githubusercontent.com/u/56339859?v=4" style={imgStyle} alt="Naman Srivastava" />
        </div>
      </div>
    </div>
  );
}

export default Home;
