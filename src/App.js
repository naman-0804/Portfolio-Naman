import React, { useState, useEffect } from 'react';
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

const NavBar = ({ toggleDarkMode, darkMode, mobileMenuOpen, toggleMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    if (mobileMenuOpen) toggleMobileMenu();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <>
      {/* --- TOP NAVBAR (Logo + Theme Toggle) --- */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            className="hamburger-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <div className="navbar-logo">
             <EyeFollower />
          </div>

          {/* Desktop Links (Hidden on Mobile via CSS) */}
          <div className="navbar-links">
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

      {/* --- MOBILE DROPDOWN TILES MENU --- */}
      <div className={`mobile-tiles-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-tile" onClick={() => scrollToSection('home')} title="Home">
          <FaHome />
        </button>
        <button className="mobile-tile" onClick={() => scrollToSection('projects')} title="Projects">
          <FaLaptopCode />
        </button>
        <button className="mobile-tile" onClick={() => scrollToSection('skills')} title="Skills">
          <FaShapes />
        </button>
        <button className="mobile-tile" onClick={() => scrollToSection('experience')} title="Experience">
          <FaBriefcase />
        </button>
        <button className="mobile-tile" onClick={() => scrollToSection('blogs')} title="Blogs">
          <FaPenNib />
        </button>
        <button className="mobile-tile" onClick={() => scrollToSection('coding-stats')} title="Coding Stats">
          <FaCode />
        </button>
        <button className="mobile-tile" onClick={() => scrollToSection('contact')} title="Contact">
          <FaEnvelope />
        </button>
      </div>
    </>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
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
      <SpeedInsights/>
      <Analytics />
    </div>
  );
}

export default App;