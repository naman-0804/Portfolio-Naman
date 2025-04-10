import React from 'react';
import resume from '../Naman_srivastava.pdf';
import mypic from '../Images/IMG_20240807_232437_330.jpeg';
import { FaLinkedin, FaGithub, FaYoutube, FaDownload, FaCode, FaDatabase, FaCloud, FaLaptopCode, FaServer } from 'react-icons/fa';

function Home() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-left">
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
              <a href="https://takeuforward.org/plus/profile/naman160804" target="_blank" rel="noopener noreferrer" className="social-icon takeforward">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRsQPKmkjRLVBygaXHIMKgl_rO3q8T8aQaA&s" alt="TakeUForward" />
              </a>
            </div>
      
            <div className="recommendation-card">
              <div className="recommendation-header">
                <h4>Recommendation</h4>
                <div className="recommender-info">
                  <span className="recommender-name">srikrupa HD</span>
                  <span className="recommender-title">Data Analyst | Data Scientist | Python | Web developer | Power BI | Quick learner | Mentor | Problem solver</span>
                  <span className="recommendation-date">August 12, 2024</span>
                </div>
              </div>
              <div className="recommendation-content">
                <p>"He showed full interest in his tasks, he followed instructions and had sufficient knowledge of his role. He was a good intern in the company"</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="about-card">
            <div className="section-title">
              <h3>About Me</h3>
              <div className="title-underline"></div>
            </div>
            
            <div className="about-content">
              <p>I love working on new problems and designing their solutions. I can solve bugs and fix codes whole day long.</p>
              <p>I thrive in <span className="highlight">Hackathons</span>, which bring out my best and help me think innovatively.</p>
              <p>I'm seeking opportunities for a <span className="highlight">developer role</span>.</p>
            </div>
            <div className="section-title">
            <h3>Resume</h3>
            <div className="title-underline"></div>
          </div>

          <div className="resume-section">
            <a href={resume} download="Naman_Srivastava.pdf" className="download-button">
              <FaDownload /> Download Resume
            </a>
          </div>
            <div className="expertise-section">
              <div className="section-title">
                <h3>My Expertise</h3>
                <div className="title-underline"></div>
              </div>
              
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon"><FaDatabase /></div>
                  <div className="skill-text">
                    <h4>Databases</h4>
                    <p>MongoDB</p>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon"><FaServer /></div>
                  <div className="skill-text">
                    <h4>Backend</h4>
                    <p>Flask</p>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon"><FaCode /></div>
                  <div className="skill-text">
                    <h4>APIs</h4>
                    <p>RESTful & GraphQL</p>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon"><FaLaptopCode /></div>
                  <div className="skill-text">
                    <h4>Frontend</h4>
                    <p>React JS</p>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon"><FaCloud /></div>
                  <div className="skill-text">
                    <h4>Cloud</h4>
                    <p>AWS</p>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
