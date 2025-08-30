import React from 'react';
import mypic from '../Images/IMG_20240807_232437_330.jpeg';
import { FaLinkedin, FaGithub, FaYoutube, FaDownload } from 'react-icons/fa';

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
              <a href="https://codolio.com/profile/naman08" target="_blank" rel="noopener noreferrer" className="social-icon takeforward">
                <img src="https://d3hr337ydpgtsa.cloudfront.net/assets/Banner.png" alt="Codolio" />
              </a>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-header">
                <h4>Recommendation</h4>
                <div className="recommender-info">
                  <span className="recommender-name">Srikrupa HD</span>
                  <span className="recommender-title">Working at The Entrepreneurship Network</span>
                  <br />
                  <span className="recommender-title">Data Analyst | Data Scientist | Python | Web developer | Power BI | Mentor | Problem solver</span>
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
              <p>I love working on new problems and designing their solutions. <span className="highlight-green">Debugging</span> and <span className="highlight-green">Designing</span> the code isn't just a task for me—it's something I can do all day with enthusiasm.</p>
              <p>I thrive in <span className="highlight-purple">Hackathons</span>, which bring out my best and help me think innovatively.</p>
              <p>With experience in software development, cloud computing (<span className="highlight-orange">AWS</span>), and full-stack projects, I am always eager to explore new technologies and enhance my skills.</p>
              <p>I'm seeking opportunities for a <span className="highlight-blue">developer role</span>.</p>
            </div>

            <div className="section-title">
              <h3>Resume</h3>
              <div className="title-underline"></div>
            </div>

            <div className="resume-section">
              <a
                href="https://drive.google.com/file/d/1GT2cGCyLLkD9CqNMD3gDRPYPTpiLgZP8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                <FaDownload /> View Resume
              </a>
            </div>

           <div className="section-title">
            <h3>What I Can Build for You</h3>
            <div className="title-underline"></div>
          </div>

          <ul className="services-list">
            <li>⚙️ Robust backend systems using Flask or Node.js with secure APIs</li>
            <li>🔐 Authentication-enabled platforms using modern auth providers</li>
            <li>🌐 Scalable full-stack web applications using React and MongoDB</li>
            <li>☁️ Cloud-native apps leveraging AWS services and serverless architecture</li>
            <li>🧠 Intelligent systems powered by Machine Learning and Computer Vision</li>
          </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
