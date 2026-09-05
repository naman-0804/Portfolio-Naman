import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiArrowLeft, FiStar } from 'react-icons/fi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Home from './pages/Home';
import ExperienceDetail from './pages/ExperienceDetail';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const prepEl = document.getElementById('prep-section');
      const expEl = document.getElementById('experiences-section');

      if (!prepEl || !expEl) return;

      const scrollPos = window.scrollY + 120; // Offset for navbar
      
      if (expEl.offsetTop <= scrollPos) {
        setActiveSection('experiences-section');
      } else if (prepEl.offsetTop <= scrollPos) {
        setActiveSection('prep-section');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-left">
        <Link to="/" className="navbar-monogram" title="Home">NS</Link>
        <Link to="/" className="navbar-brand">
          <span className="brand-desktop">Interview Journey</span>
          <span className="brand-mobile">
            {activeSection === 'prep-section' ? 'Prep' 
             : activeSection === 'experiences-section' ? 'Experiences' 
             : 'Interview Journey'}
          </span>
        </Link>
      </div>

      <div className="navbar-center">
        <button 
          className={`nav-link ${activeSection === 'prep-section' ? 'active' : ''}`} 
          onClick={() => scrollTo('prep-section')}
        >
          Prep
        </button>
        <button 
          className={`nav-link ${activeSection === 'experiences-section' ? 'active' : ''}`} 
          onClick={() => scrollTo('experiences-section')}
        >
          Experiences
        </button>
      </div>

      <div className="navbar-right">
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <a
          href="https://namansrivastava.in"
          className="portfolio-link"
          title="Back to Portfolio"
        >
          <FiArrowLeft />
          <span>Portfolio</span>
        </a>
      </div>
    </nav>
  );
}

function FooterRating() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [averageRating, setAverageRating] = useState(null);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch("https://docs.google.com/spreadsheets/d/1Pv7fL7UJjVhgpXGIFHh0c2aWQpSh_3VeL9mJ5mxBFTA/gviz/tq?tqx=out:csv");
        const csvText = await response.text();
        const lines = csvText.split('\n').slice(1);
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

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6rliinPaSf1TM6lKQDXiVt5ctNlK7Swz-XEreC3gEB_4XBw/formResponse";
    const formData = new FormData();
    formData.append("entry.1095894507", value);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      setSubmitted(true);
      const newCount = totalRatings + 1;
      const newSum = (parseFloat(averageRating || 0) * totalRatings) + value;
      setAverageRating((newSum / newCount).toFixed(1));
      setTotalRatings(newCount);
    }).catch((err) => console.error("Error submitting rating:", err));
  };

  return (
    <footer className="interview-footer">
      <div className="interview-footer-inner">
        <div className="interview-footer-top">
          <span className="interview-footer-emoji">🙏</span>
          <p>Thank you for reading!</p>
        </div>

        <div className="interview-footer-rating">
          <div className="interview-footer-rating-header">
            <p className="interview-footer-rating-label">
              {submitted ? 'Thanks! Glad it helped 🌟' : 'Rate this if it helped your preparation'}
            </p>
            {averageRating && (
              <div className="interview-footer-avg">
                <FaStar style={{ color: '#ffd700', fontSize: '1rem' }} />
                <span>{averageRating}</span>
              </div>
            )}
          </div>

          <div className="interview-footer-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`interview-star-item ${submitted ? 'submitted' : ''} ${rating >= star ? 'selected' : ''}`}
                onClick={() => handleRating(star)}
              >
                <span className="interview-star-num">{star}</span>
                {rating >= star ? (
                  <FaStar className="interview-star-icon filled" />
                ) : (
                  <FaRegStar className="interview-star-icon empty" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="interview-footer-bottom">
          <p className="interview-footer-made">Made with ❤️ &amp; React</p>
          <span className="interview-footer-badge">🚀 Interview Journey</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
          </Routes>
        </main>
        <FooterRating />
      </div>
    </Router>
  );
}

export default App;
