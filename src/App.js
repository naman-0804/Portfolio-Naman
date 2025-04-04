import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../src/Design/home.css';
import '../src/Design/nav.css';
import '../src/Design/contact.css';
import '../src/Design/exp.css';
import '../src/Design/project.css';
import '../src/Design/skill.css';


import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Add this className */}
      <div className="navbar" >
        <div className="section-left">
          <h2>Welcome to my Portfolio</h2>
        </div>
        <div className="section-right">
          <Link to="/" className='button-11'>Home</Link>
          <Link to="/projects" className='button-11'>Projects</Link>
          <Link to="/skills" className='button-11'>Skills</Link>
          <Link to="/experience" className='button-11'>Experience</Link>
          <Link to="/contact" className='button-11'>Contact</Link>
        </div>
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;