import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiArrowLeft, FiStar, FiArrowUpRight } from 'react-icons/fi';
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

function RateWidget() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleRating = (value) => {
    if (submitted) return;
    setRating(value);

    // Silent POST to Google Form
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6rliinPaSf1TM6lKQDXiVt5ctNlK7Swz-XEreC3gEB_4XBw/formResponse";
    const formData = new FormData();
    formData.append("entry.1095894507", value);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      setSubmitted(true);
    }).catch((err) => console.error("Error submitting rating:", err));
  };

  return (
    <div className={`rate-fab ${submitted ? 'submitted' : ''}`} title="Rate my content">
      <span className="rate-fab-label">
        {submitted ? 'Thank you! 🌟' : 'Rate this'}
      </span>
      {!submitted && (
        <span className="rate-fab-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`rate-star ${star <= hoveredStar ? 'glow' : ''} ${rating >= star ? 'selected' : ''}`}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </span>
      )}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <RateWidget />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
