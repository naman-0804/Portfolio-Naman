import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import resume from '../Naman_srivastava.pdf';
import mypic from '../Images/IMG_20240807_232437_330.jpeg';
import { FaLinkedin, FaGithub, FaYoutube, FaDownload } from 'react-icons/fa';

// Bot responses
const botResponses = [
  {
    keywords: ['work', 'experience', 'job', 'intern'],
    response: "I have interned at The Entrepreneurship Network (TEN) as a Software Development Intern and worked as a Web Developer for Biosphere Club.",
    buttonText: "See Experience",
    buttonLink: "/experience"
  },
  {
    keywords: ['project', 'projects', 'portfolio','proj'],
    response: "I've worked on projects like Medhub360, Vitalized, Sahyogi, and more.",
    buttonText: "View Projects",
    buttonLink: "/projects"
  },
  {
    keywords: ['tech', 'stack', 'technology', 'technologies', 'skills'],
    response: "I'm skilled in React, Python, Flask, AWS, MongoDB, and more.",
    buttonText: "See Skills",
    buttonLink: "/skills"
  },
  {
    keywords: ['education', 'college', 'school'],
    response: "I'm pursuing B.Tech in Computer Science at VIT, Vellore. I completed my schooling at Peace Public School.",
    buttonText: "See Education",
    buttonLink: "/experience"
  },
  {
    keywords: ['contact', 'email', 'reach'],
    response: "You can contact me through the Contact section of my portfolio!",
    buttonText: "Contact Me",
    buttonLink: "/contact"
  },
  {
    keywords: ['hello', 'hi', 'hey'],
    response: "Hello! I'm Naman's portfolio bot. Ask me about my work experience, projects, or skills."
  }
];

function getBotResponse(message) {
  const lowerMsg = message.toLowerCase();
  for (const entry of botResponses) {
    if (entry.keywords.some(keyword => lowerMsg.includes(keyword))) {
      return entry;
    }
  }
  return {
    response: "Sorry, I didn't understand that. You can ask about my work experience, projects, skills, or education!"
  };
}

function Home() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your portfolio assistant. Ask me about my work experience, projects, or skills." }
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botReplyObj = getBotResponse(input);
    const botMsg = { from: 'bot', text: botReplyObj.response, buttonText: botReplyObj.buttonText, buttonLink: botReplyObj.buttonLink };
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  const handleBotButton = (link) => {
    navigate(link);
  };

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
              <a href={resume} download="Naman_Srivastava.pdf" className="download-button">
                <FaDownload /> Download Resume
              </a>
            </div>

            {/* Chatbot Section */}
            <div className="section-title">
              <h3>Ask Me Anything!</h3>
              <div className="title-underline"></div>
            </div>
            <div className="chatbot-container uniform-bg">
              <div className="chatbot-messages">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`chatbot-message ${msg.from}`}>
                    <span>{msg.text}</span>
                    {msg.from === 'bot' && msg.buttonText && msg.buttonLink && (
                      <button
                        className="chatbot-link-btn"
                        onClick={() => handleBotButton(msg.buttonLink)}
                      >
                        {msg.buttonText}
                      </button>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="chatbot-input-row">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                />
                <button onClick={handleSend}>Send</button>
              </div>
            </div>
            {/* End chatbot */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;