import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiArrowLeft } from 'react-icons/fi';
import Home from './pages/Home';
import ExperienceDetail from './pages/ExperienceDetail';
import { experiences } from './data/experiences';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/" className="nav-brand">My Interview Journey</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <button 
              className="btn-theme" 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <a href="/" style={{marginLeft: '10px'}} title="Back to Portfolio">
              <FiArrowLeft size={20} />
            </a>
          </div>
        </nav>
        <main className="page-content">
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
