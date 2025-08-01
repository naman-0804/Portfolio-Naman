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
  const [submitStatus, setSubmitStatus] = useState(null);
  
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

  emailjs.send('service_655mg9c', 'template_jo7ezml', formData, 'K34YWs3fe407eAfCX')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);

      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. I will get back to you soon.',
        icon: 'success',
        confirmButtonColor: '#6a0dad'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.error('FAILED...', error);
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
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you! Whether you have a question or just want to say hi.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
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
                <p>+91 ---</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/naman-0804" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/namansrivastava._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          
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
                  placeholder="Name"
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
                  placeholder="abcd@example.com"
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
                  placeholder="Hello, I'd like to talk about..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
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
