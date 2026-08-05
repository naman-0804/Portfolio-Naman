import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../Design/footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">

        {/* Thank you message */}
        <div className="footer-thankyou">
          <span className="footer-thankyou-emoji">🙏</span>
          <p>Thank you for visiting!</p>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-tagline">Building digital experiences with purpose.</p>
          </div>

          <div className="footer-meta">
            <span className="footer-started-badge">🚀 Started Aug 2024</span>
            <p className="footer-made-with">
              Made with <FaHeart className="footer-heart" /> & React
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
