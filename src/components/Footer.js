import React, { useState } from 'react';
import { FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import '../Design/footer.css';

function Footer() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value) => {
    if (submitted) return;
    setRating(value);
    
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSekN351lR37-kC_UxMI4TZpiYdttHiXGE2sWviBDD8zkZBJqw/formResponse";
    const formData = new FormData();
    formData.append("entry.109593671", value);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      setSubmitted(true);
    }).catch((err) => console.error("Error submitting rating:", err));
  };

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

        <div className="footer-rating-container" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-secondary, #a0a0a0)', marginBottom: '1rem', fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '1.1rem', fontWeight: 600 }}>
            {submitted ? 'Thank you for your feedback! 🌟' : 'Rate My Portfolio'}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-surface-solid, #1a1a1a)', padding: '1.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border-color, rgba(255,255,255,0.08))' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <div 
                key={star} 
                onClick={() => handleRating(star)}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  cursor: submitted ? 'default' : 'pointer',
                  gap: '0.8rem',
                  transition: 'transform 0.2s ease',
                  transform: (rating === star && !submitted) ? 'scale(1.1)' : 'scale(1)'
                }}
                onMouseEnter={(e) => { if (!submitted) e.currentTarget.style.transform = 'scale(1.1)' }}
                onMouseLeave={(e) => { if (!submitted) e.currentTarget.style.transform = 'scale(1)' }}
              >
                <span style={{ color: 'var(--text-secondary, #a0a0a0)', fontSize: '1rem', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>{star}</span>
                {rating >= star ? (
                  <FaStar style={{ color: '#ffd700', fontSize: '1.8rem', dropShadow: '0 0 8px rgba(255, 215, 0, 0.4)' }} />
                ) : (
                  <FaRegStar style={{ color: 'var(--text-tertiary, #707070)', fontSize: '1.8rem' }} />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
