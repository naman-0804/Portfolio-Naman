import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaHeart } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';
import '../Design/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">

        {/* Thank you message */}
        <div className="footer-thankyou">
          <span className="footer-thankyou-emoji">🙏</span>
          <p>Thank you for visiting!</p>
        </div>

        {/* Top Row */}
        <div className="footer-top">

          {/* Left: Brand */}
          <div className="footer-brand">
            <h3 className="footer-name">Naman Srivastava</h3>
            <p className="footer-tagline">Building digital experiences with purpose.</p>
          </div>

          {/* Center: Stats */}
          <div className="footer-stats">
            <div className="footer-stat-item">
              <span className="footer-stat-value">379</span>
              <span className="footer-stat-label">Commits</span>
            </div>
            <div className="footer-stat-divider" />
            <div className="footer-stat-item">
              <span className="footer-stat-value">~2yr</span>
              <span className="footer-stat-label">in the making</span>
            </div>
          </div>

          {/* Right: Nav + Socials */}
          <div className="footer-right">
            <nav className="footer-nav">
              <a onClick={() => scrollToSection('home')}>Home</a>
              <a onClick={() => scrollToSection('projects')}>Projects</a>
              <a onClick={() => scrollToSection('skills')}>Skills</a>
              <a onClick={() => scrollToSection('experience')}>Experience</a>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </nav>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/naman-0804" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.youtube.com/@naman_0804/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://orcid.org/0009-0007-1557-9333" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="ORCID">
                <SiOrcid />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copy">© {currentYear} Naman Srivastava. All rights reserved.</p>
            <span className="footer-started-badge">🚀 Started Aug 2024</span>
          </div>
          <p className="footer-made-with">
            Made with <FaHeart className="footer-heart" /> & React
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
