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
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Scroll Spy (Mobile)
  useEffect(() => {
    if (isDesktop) return;

    const options = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Responsive strip in the upper-mid screen
      threshold: 0 // Trigger immediately on any intersection
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Target all sections that have IDs corresponding to nav links
    const sectionIds = ['home', 'projects', 'skills', 'experience', 'blogs', 'coding-stats', 'contact'];
    
    // Use a small timeout to ensure DOM elements are fully rendered
    const timeoutId = setTimeout(() => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isDesktop]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId); // Set immediately for better UX
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
                <button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                  Home
                </button>
                <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
                  Projects
                </button>
                <button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
                  Skills
                </button>
                <button onClick={() => scrollToSection('experience')} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
                  Experience
                </button>
                <button onClick={() => scrollToSection('blogs')} className={`nav-link ${activeSection === 'blogs' ? 'active' : ''}`}>
                  Blogs
                </button>
                <button onClick={() => scrollToSection('coding-stats')} className={`nav-link ${activeSection === 'coding-stats' ? 'active' : ''}`}>
                  Coding Stats
                </button>
                <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
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
          <button 
            className={`mobile-tile ${activeSection === 'home' ? 'active' : ''}`} 
            onClick={() => scrollToSection('home')} 
            title="Home"
          >
            <FaHome />
            <span>Home</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'projects' ? 'active' : ''}`} 
            onClick={() => scrollToSection('projects')} 
            title="Projects"
          >
            <FaLaptopCode />
            <span>Projects</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'skills' ? 'active' : ''}`} 
            onClick={() => scrollToSection('skills')} 
            title="Skills"
          >
            <FaShapes />
            <span>Skills</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'experience' ? 'active' : ''}`} 
            onClick={() => scrollToSection('experience')} 
            title="Experience"
          >
            <FaBriefcase />
            <span>Experience</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'blogs' ? 'active' : ''}`} 
            onClick={() => scrollToSection('blogs')} 
            title="Blogs"
          >
            <FaPenNib />
            <span>Blogs</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'coding-stats' ? 'active' : ''}`} 
            onClick={() => scrollToSection('coding-stats')} 
            title="Stats"
          >
            <FaCode />
            <span>Stats</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'contact' ? 'active' : ''}`} 
            onClick={() => scrollToSection('contact')} 
            title="Contact"
          >
            <FaEnvelope />
            <span>Contact</span>
          </button>
        </div>
      )}
    </>
  );
};

function AppContent() {
  const [darkMode, setDarkMode] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
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