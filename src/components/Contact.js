import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaCommentAlt, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Make sure your EmailJS Service/Template IDs are correct
    emailjs.send('service_655mg9c', 'template_jo7ezml', formData, 'K34YWs3fe407eAfCX')
      .then((response) => {
        setIsSubmitting(false);

        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will get back to you soon.',
          icon: 'success',
          confirmButtonColor: '#6366f1', // Updated to match theme
          background: '#f8f9fa',
          color: '#1e293b'
        });

        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setIsSubmitting(false);

        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#d33'
        });
      });
  };
  
  return (
    <div id="contact-section">
      <div className="contact-container">
        
        {/* Header */}
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          Have a question or want to work together? Drop me a message!
        </p>
        
        <div className="contact-content">
          
          {/* Left Column: Info & Social */}
          <div className="contact-left-col">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>namansrivastava0104@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 (Available on Request)</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/naman-0804" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/namansrivastava._/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Me a Message</h2>
              
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser /> <span>Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope /> <span>Your Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <FaCommentAlt /> <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;