import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔐 Email OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // 📱 Mobile OTP states
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [generatedMobileOtp, setGeneratedMobileOtp] = useState('');
  const [enteredMobileOtp, setEnteredMobileOtp] = useState('');
  const [isMobileVerified, setIsMobileVerified] = useState(false);

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
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_OTP,
      { to_email: formData.email, otp },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setOtpSent(true);
      Swal.fire('OTP Sent', 'Check your email', 'success');
    }).catch((err) => {
      console.error(err);
      Swal.fire('Error', 'Failed to send OTP', 'error');
    });
  };

  // ✅ Verify Email OTP
  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setIsVerified(true);
      Swal.fire('Verified', 'Email verified successfully', 'success');
    } else {
      Swal.fire('Invalid OTP', 'Please try again', 'error');
    }
  };

  // 📞 Send Mobile OTP (Fast2SMS)
  const sendMobileOtp = () => {
    // Basic check for Indian 10-digit numbers
    if (!formData.mobile || formData.mobile.length !== 10) {
      Swal.fire('Invalid Number', 'Please enter a valid 10-digit mobile number', 'warning');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedMobileOtp(otp);

    // Call our secure Vercel Serverless Function
    fetch('/api/send-mobile-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile: formData.mobile, otp })
    })
      .then(res => res.json())
      .then(data => {
        if (data.return) {
          setMobileOtpSent(true);
          Swal.fire('OTP Sent', 'Check your mobile for the OTP', 'success');
        } else {
          Swal.fire('Error', data.message || 'Failed to send OTP to mobile', 'error');
        }
      })
      .catch(error => {
        console.error("API Error: ", error);
        Swal.fire('Error', 'Failed to reach the server to send SMS.', 'error');
      });
  };

  // ✅ Verify Mobile OTP
  const verifyMobileOtp = () => {
    if (enteredMobileOtp === generatedMobileOtp) {
      setIsMobileVerified(true);
      Swal.fire('Verified', 'Mobile number verified successfully', 'success');
    } else {
      Swal.fire('Invalid OTP', 'The mobile OTP is incorrect, please try again.', 'error');
    }
  };

  // ✉️ Send Message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified || !isMobileVerified) {
      Swal.fire('Warning', 'Please verify both email and mobile number before submitting.', 'warning');
      return;
    }

    setIsSubmitting(true);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_MSG,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false);
      Swal.fire('Message Sent!', 'I will get back to you soon.', 'success');

      setFormData({ name: '', email: '', mobile: '', message: '' });
      setOtpSent(false);
      setIsVerified(false);
      setEnteredOtp('');
      
      setMobileOtpSent(false);
      setIsMobileVerified(false);
      setEnteredMobileOtp('');
      setGeneratedMobileOtp('');
    }).catch(() => {
      setIsSubmitting(false);
      Swal.fire('Oops!', 'Something went wrong.', 'error');
    });
  };

  return (
    <div id="contact-section">
      <div className="contact-container">
        <div className="contact-content">

          {/* LEFT */}
          <div className="contact-left-col premium">
            <h2 className="premium-heading">Get In Touch</h2>
            
            <div className="premium-contact-info">
              <div className="info-block">
                <h4>EMAIL</h4>
                <p>namansrivastava0104@gmail.com</p>
              </div>

              <div className="info-block">
                <h4>PHONE</h4>
                <p>+91 (Available on Request)</p>
              </div>
            </div>

            <div className="premium-socials">
              <h4>SOCIALS</h4>
              <div className="social-icons-minimal">
                <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/naman-0804" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://x.com/n_a_m_a_n_16" target="_blank" rel="noreferrer">Twitter</a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrapper premium">
            <form className="contact-form premium" onSubmit={handleSubmit}>
              
              <div className="form-group premium-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* 📧 Email + Verify */}
              <div className="form-group premium-group">
                <label>Email</label>
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

              {/* 🔢 Email OTP */}
              {otpSent && !isVerified && (
                <div className="form-group premium-group">
                  <label>Enter Email OTP</label>
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

              {/* 📱 Mobile + Verify */}
              <div className="form-group premium-group">
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span>Mobile Number</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 'normal', lineHeight: '1.2', textTransform: 'none', letterSpacing: 'normal' }}>
                    (Note: Your mobile number won't be visible to me or stored. It is just to prevent spam messages from fake accounts.)
                  </span>
                </label>
                <div className="email-row">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    disabled={isMobileVerified}
                    placeholder="10-digit number"
                    maxLength="10"
                    required
                  />

                  {!isMobileVerified && (
                    <button
                      type="button"
                      className="verify-btn"
                      onClick={sendMobileOtp}
                      disabled={!formData.mobile || formData.mobile.length !== 10}
                    >
                      Verify
                    </button>
                  )}

                  {isMobileVerified && <span className="verified-badge">✔</span>}
                </div>
              </div>

              {/* 🔢 Mobile OTP */}
              {mobileOtpSent && !isMobileVerified && (
                <div className="form-group premium-group">
                  <label>Enter Mobile OTP</label>
                  <div className="email-row">
                    <input
                      type="text"
                      value={enteredMobileOtp}
                      onChange={(e) => setEnteredMobileOtp(e.target.value)}
                      placeholder="6-digit OTP"
                    />
                    <button
                      type="button"
                      className="verify-btn"
                      onClick={verifyMobileOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              )}

              <div className="form-group premium-group">
                <label>Your Message</label>
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
                disabled={!isVerified || !isMobileVerified || isSubmitting}
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
