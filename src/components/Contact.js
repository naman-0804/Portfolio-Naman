import React, { useState } from 'react';
import {
  FaEnvelope, FaPhone, FaPaperPlane, FaLinkedin,
  FaGithub, FaUser, FaCommentAlt, FaTwitter
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔐 OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // ✅ Email format check
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 📩 Send OTP
  const sendOtp = () => {
    if (!isValidEmail(formData.email)) {
      Swal.fire('Invalid Email', 'Please enter a valid email address', 'warning');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    emailjs.send(
      'service_655mg9c',
      'template_otp',
      { to_email: formData.email, otp },
      'K34YWs3fe407eAfCX'
    ).then(() => {
      setOtpSent(true);
      Swal.fire('OTP Sent', 'Check your email', 'success');
    }).catch((err) => {
      console.error(err);
      Swal.fire('Error', 'Failed to send OTP', 'error');
    });
  };

  // ✅ Verify OTP
  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setIsVerified(true);
      Swal.fire('Verified', 'Email verified successfully', 'success');
    } else {
      Swal.fire('Invalid OTP', 'Please try again', 'error');
    }
  };

  // ✉️ Send Message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) return;

    setIsSubmitting(true);

    emailjs.send(
      'service_655mg9c',
      'template_jo7ezml',
      formData,
      'K34YWs3fe407eAfCX'
    ).then(() => {
      setIsSubmitting(false);
      Swal.fire('Message Sent!', 'I will get back to you soon.', 'success');

      setFormData({ name: '', email: '', message: '' });
      setOtpSent(false);
      setIsVerified(false);
      setEnteredOtp('');
    }).catch(() => {
      setIsSubmitting(false);
      Swal.fire('Oops!', 'Something went wrong.', 'error');
    });
  };

  return (
    <div id="contact-section">
      <div className="contact-container">

        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          Have a question or want to work together? Drop me a message!
        </p>

        <div className="contact-content">

          {/* LEFT */}
          <div className="contact-left-col">
            <div className="contact-card">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>namansrivastava0104@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon"><FaPhone /></div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 (Available on Request)</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noreferrer" className="social-icon-link"><FaLinkedin /></a>
                <a href="https://github.com/naman-0804" target="_blank" rel="noreferrer" className="social-icon-link"><FaGithub /></a>
                <a href="https://x.com/n_a_m_a_n_16" target="_blank" rel="noreferrer" className="social-icon-link"><FaTwitter /></a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Me a Message</h2>

              <div className="form-group">
                <label><FaUser /> Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* 📧 Email + Verify */}
              <div className="form-group">
                <label><FaEnvelope /> Your Email</label>
                <div className="email-row">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isVerified}
                    required
                  />

                  {!isVerified && (
                    <button
                      type="button"
                      className="verify-btn"
                      onClick={sendOtp}
                      disabled={!isValidEmail(formData.email)}
                    >
                      Verify
                    </button>
                  )}

                  {isVerified && <span className="verified-badge">✔</span>}
                </div>
              </div>

              {/* 🔢 OTP */}
              {otpSent && !isVerified && (
                <div className="form-group">
                  <label>Enter OTP</label>
                  <div className="email-row">
                    <input
                      type="text"
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                      placeholder="6-digit OTP"
                    />
                    <button
                      type="button"
                      className="verify-btn"
                      onClick={verifyOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label><FaCommentAlt /> Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={!isVerified || isSubmitting}
              >
                {isSubmitting
                  ? <span className="spinner"></span>
                  : <><FaPaperPlane /> Send Message</>
                }
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
