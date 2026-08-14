import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiArrowLeft } from 'react-icons/fi';
import Home from './pages/Home';
import ExperienceDetail from './pages/ExperienceDetail';
import './index.css';

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

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
