import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_655mg9c', 'template_jo7ezml', formData, 'sqzDmJD_V393T3d-j')
      .then((response) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message.');
      });
  };

  return (
    <div id="contact-section" style={{ padding: "1px", backgroundColor: '#fff7e6' }}>
      <center><h1>Contact Me</h1></center>
      
      <div className="contact" style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
        <div id="Name">
          <h3>Name - Naman Srivastava</h3>
        </div>
        <div id="Email">
          <h3>Email id - namansrivastava1608@gmail.com</h3>
        </div>
      </div>

      <br />

      <center><h1>Reach out</h1></center>
      <form onSubmit={handleSubmit}>
        <div className="reach" style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
          <div id="Name">
            <h4><label htmlFor="name">Name: </label></h4>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          </div>
          <div id="Email">
            <h4><label htmlFor="email">Email: </label></h4>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>

          <div id="Message">
            <h4><label htmlFor="message">Message: </label></h4>
            <textarea name="message" placeholder="Enter a message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
