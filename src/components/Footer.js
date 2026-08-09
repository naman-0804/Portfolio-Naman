import React, { useState, useEffect } from 'react';
import { FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import '../Design/footer.css';

function Footer() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [averageRating, setAverageRating] = useState(null);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch("https://docs.google.com/spreadsheets/d/1x1zE6O9X0MjOpFE4rpEczVdqmJiEFt68dEylNPiiBYQ/gviz/tq?tqx=out:csv");
        const csvText = await response.text();
        const lines = csvText.split('\n').slice(1); // skip header
        let sum = 0;
        let count = 0;
        lines.forEach(line => {
          const columns = line.split(',');
          if (columns.length >= 2) {
            const ratingStr = columns[1].replace(/"/g, '');
            const ratingNum = parseInt(ratingStr, 10);
            if (!isNaN(ratingNum)) {
              sum += ratingNum;
              count++;
            }
          }
        });
        if (count > 0) {
          setAverageRating((sum / count).toFixed(1));
          setTotalRatings(count);
        }
      } catch (err) {
        console.error("Error fetching ratings:", err);
      }
    };
    fetchRatings();
  }, []);

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
      // Optimistically update the average
      const newCount = totalRatings + 1;
      const newSum = (parseFloat(averageRating || 0) * totalRatings) + value;
      setAverageRating((newSum / newCount).toFixed(1));
      setTotalRatings(newCount);
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: 'var(--text-secondary, #a0a0a0)', margin: 0, fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '1.1rem', fontWeight: 600 }}>
              {submitted ? 'Thank you for your feedback! 🌟' : 'Rate My Portfolio'}
            </p>
            {averageRating && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255, 215, 0, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255, 215, 0, 0.2)' }}>
                <FaStar style={{ color: '#ffd700', fontSize: '1rem' }} />
                <span style={{ color: '#ffd700', fontWeight: 600, fontSize: '0.9rem' }}>{averageRating}</span>
              </div>
            )}
          </div>
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
