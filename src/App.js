import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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

const NavBar = ({ toggleDarkMode, darkMode, isDesktop }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if the current route matches
  const isActive = (path) => location.pathname === path;

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
            {isDesktop ? (
              <>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
                <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
                  Projects
                </Link>
                <Link to="/skills" className={`nav-link ${isActive('/skills') ? 'active' : ''}`}>
                  Skills
                </Link>
                <Link to="/experience" className={`nav-link ${isActive('/experience') ? 'active' : ''}`}>
                  Experience
                </Link>
                <Link to="/blogs" className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}>
                  Blogs
                </Link>
                <Link to="/stats" className={`nav-link ${isActive('/stats') ? 'active' : ''}`}>
                  Coding Stats
                </Link>
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact
                </Link>
              </>
            ) : (
              <>
                <button onClick={() => scrollToSection('home')} className="nav-link">
                  Home
                </button>
                <button onClick={() => scrollToSection('projects')} className="nav-link">
                  Projects
                </button>
                <button onClick={() => scrollToSection('skills')} className="nav-link">
                  Skills
                </button>
                <button onClick={() => scrollToSection('experience')} className="nav-link">
                  Experience
                </button>
                <button onClick={() => scrollToSection('blogs')} className="nav-link">
                  Blogs
                </button>
                <button onClick={() => scrollToSection('coding-stats')} className="nav-link">
                  Coding Stats
                </button>
                <button onClick={() => scrollToSection('contact')} className="nav-link">
                  Contact
                </button>
              </>
            )}
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

      {/* --- MOBILE BOTTOM DOCK --- */}
      {!isDesktop && (
        <div className="mobile-bottom-dock">
          <button className="mobile-tile" onClick={() => scrollToSection('home')} title="Home">
            <FaHome />
            <span>Home</span>
          </button>
          <button className="mobile-tile" onClick={() => scrollToSection('projects')} title="Projects">
            <FaLaptopCode />
            <span>Projects</span>
          </button>
          <button className="mobile-tile" onClick={() => scrollToSection('skills')} title="Skills">
            <FaShapes />
            <span>Skills</span>
          </button>
          <button className="mobile-tile" onClick={() => scrollToSection('experience')} title="Experience">
            <FaBriefcase />
            <span>Experience</span>
          </button>
          <button className="mobile-tile" onClick={() => scrollToSection('blogs')} title="Blogs">
            <FaPenNib />
            <span>Blogs</span>
          </button>
          <button className="mobile-tile" onClick={() => scrollToSection('coding-stats')} title="Stats">
            <FaCode />
            <span>Stats</span>
          </button>
          <button className="mobile-tile" onClick={() => scrollToSection('contact')} title="Contact">
            <FaEnvelope />
            <span>Contact</span>
          </button>
        </div>
      )}
    </>
  );
};

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isDesktop) {
    // Desktop: Use page routes
    return (
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} isDesktop={isDesktop} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blogs" element={<BlogSection />} />
            <Route path="/stats" element={<CodingStats />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SpeedInsights />
        <Analytics />
      </div>
    );
  } else {
    // Mobile: Single scroll experience
    return (
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} isDesktop={isDesktop} />
        <main className="content">
          {/* Home Section */}
          <section id="home" className="section-wrapper">
            <Home />
          </section>

          {/* Projects Section */}
          <section id="projects" className="section-wrapper">
            <Projects />
          </section>

          {/* Skills Section */}
          <section id="skills" className="section-wrapper">
            <Skills />
          </section>

          {/* Experience Section */}
          <section id="experience" className="section-wrapper">
            <Experience />
          </section>

          {/* Blogs Section */}
          <section id="blogs" className="section-wrapper">
            <BlogSection />
          </section>

          {/* Coding Stats Section */}
          <section id="coding-stats" className="section-wrapper">
            <CodingStats />
          </section>

          {/* Contact Section */}
          <section id="contact" className="section-wrapper">
            <Contact />
          </section>
        </main>
        <SpeedInsights />
        <Analytics />
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;