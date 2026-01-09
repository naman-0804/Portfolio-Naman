import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

// Icons for the Floating Dock
import { FaHome, FaLaptopCode, FaShapes, FaBriefcase, FaPenNib, FaEnvelope, FaCode } from 'react-icons/fa';

// CSS Imports
import '../src/Design/home.css';
import '../src/Design/nav.css';
import '../src/Design/contact.css';
import '../src/Design/exp.css';
import '../src/Design/project.css';
import '../src/Design/skill.css';
import '../src/Design/blog.css';
import '../src/Design/terminal.css';
import '../src/Design/stats.css';
// Component Imports
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BlogSection from './components/Blogsection';
import EyeFollower from './components/EyeFollower';
import CodingStats from './components/CodingStats';
const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- TOP NAVBAR (Logo + Theme Toggle) --- */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          <div className="navbar-logo">
             <EyeFollower />
          </div>

          {/* Desktop Links (Hidden on Mobile via CSS) */}
          <div className="navbar-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
              Projects
            </Link>
            <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
              Skills
            </Link>
            <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>
              Experience
            </Link>
            <Link to="/blogs" className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}>
              Blogs
            </Link>

            <Link to="/CodingStats" className={`nav-link ${location.pathname === '/CodingStats' ? 'active' : ''}`}>
              Coding Stats
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </div>

          <button 
            className="theme-toggle-btn" 
            onClick={toggleDarkMode} 
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

        </div>
      </nav>

      {/* --- FLOATING BOTTOM DOCK (Mobile Only) --- */}
      <div className="mobile-nav-container">
        <Link to="/" className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <FaHome />
        </Link>
        <Link to="/projects" className={`mobile-nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
          <FaLaptopCode />
        </Link>
        <Link to="/skills" className={`mobile-nav-item ${location.pathname === '/skills' ? 'active' : ''}`}>
          <FaShapes />
        </Link>
        <Link to="/experience" className={`mobile-nav-item ${location.pathname === '/experience' ? 'active' : ''}`}>
          <FaBriefcase />
        </Link>
        <Link to="/blogs" className={`mobile-nav-item ${location.pathname === '/blogs' ? 'active' : ''}`}>
          <FaPenNib />
        </Link>
        <Link to="/CodingStats" className={`mobile-nav-item ${location.pathname === '/CodingStats'?'active':''}`}>
        <FaCode/>
        </Link>
        <Link to="/contact" className={`mobile-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          <FaEnvelope />
        </Link>
      </div>
    </>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blogs" element={<BlogSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/CodingStats" element={<CodingStats />} />
          </Routes>
        </main>
        <SpeedInsights/>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;