import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaDownload, FaEye } from 'react-icons/fa';
import Terminal from './terminal.js';
import mypic from '../Images/IMG_20240807_232437_330.jpeg';

function Home() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        
        {/* --- LEFT COLUMN: PROFILE --- */}
        <div className="hero-left">
          
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-image-container">
              <img src={mypic} alt="Naman Srivastava" />
            </div>
            <h1>Naman Srivastava</h1>
            <h2>Software Developer</h2>
            
            <div className="social-links">
              <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <FaLinkedin />
              </a>
              <a href="https://github.com/naman-0804" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <FaGithub />
              </a>
              <a href="https://www.youtube.com/@naman_0804/" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                <FaYoutube />
              </a>
              <a href="https://codolio.com/profile/naman08" target="_blank" rel="noopener noreferrer" className="social-icon takeforward">
                <img src="https://d3hr337ydpgtsa.cloudfront.net/assets/Banner.png" alt="Codolio" />
              </a>
            </div>

            {/* Recommendation Bubble (Nested inside Profile Card or below it) */}
            <div className="recommendation-card">
              <div className="recommendation-header">
                <h4>Recommendation</h4>
                <div className="recommender-info">
                  <span className="recommender-name">Srikrupa HD</span>
                  <span className="recommender-title">Data Analyst | Mentor at TEN</span>
                  <span className="recommendation-date">August 12, 2024</span>
                </div>
              </div>
              <div className="recommendation-content">
                <p>"He showed full interest in his tasks, he followed instructions and had sufficient knowledge of his role. He was a good intern in the company."</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: ABOUT & CONTENT --- */}
        <div className="hero-right">
          <div className="about-card">
            
            {/* About Me Section */}
            <div className="content-section">
              <h3 className="content-title">About Me</h3>
              <div className="about-content">
                <p>
                  I love working on new problems and designing their solutions. 
                  <span className="highlight blue"> Debugging</span> and 
                  <span className="highlight blue"> Designing</span> the code isn't just a task for me—it's something I can do all day with enthusiasm.
                </p>
                <p>
                  I thrive in <span className="highlight purple">Hackathons</span>, which bring out my best and help me think innovatively.
                </p>
                <p>
                  With experience in software development, cloud computing (<span className="highlight orange">AWS</span>), and full-stack projects, I am always eager to explore new technologies and enhance my skills.
                </p>
                <p>
                  I'm currently seeking opportunities for a <span className="highlight blue">Software Developer role</span>.
                </p>
              </div>
            </div>

            {/* Resume Section */}
            <h3 className="content-title">Resume</h3>
            <div className="resume-section">
              <div className="resume-info">
                <span className="resume-badge">PDF</span>
                <div className="resume-text">
                  <h4>Naman — Resume</h4>
                  <p>ML • Cloud • Full-Stack</p>
                </div>
              </div>

              <div className="resume-actions">
                <a
                  href="https://drive.google.com/file/d/1GT2cGCyLLkD9CqNMD3gDRPYPTpiLgZP8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn primary"
                >
                  <FaEye /> View
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1GT2cGCyLLkD9CqNMD3gDRPYPTpiLgZP8"
                  className="resume-btn secondary"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>

            {/* Terminal Section */}
            <h3 className="content-title">Interactive CLI</h3>
            <div className="terminal-container">
              <Terminal />
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;