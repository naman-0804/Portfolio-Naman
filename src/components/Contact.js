import React from 'react';

function Contact() {
  return (
    <div id="contact-section" style={{ padding: "1px", backgroundColor: "silver" }}>
      <center><h1>Contact</h1></center>
      <div className="contact">
        <div id="Name">
          <h3>Naman</h3>
        </div>
        <div id="Email">
          <h3>Email id</h3>
        </div>
        <div id="Phone">
          <h3>Phone number</h3>
        </div>
      </div>
      <br />
      <center><h1>Reach out</h1></center>
      <div className="reach">
        <div id="Name">
          <h4><label htmlFor="Name">Name: </label></h4>
          <input type="text" placeholder="Name"></input>
        </div>
        <div id="Email">
          <h4><label htmlFor="Email">Email: </label></h4>
          <input type="text" placeholder="Email"></input>
        </div>
        <div id="Phone">
          <h4><label htmlFor="Phone">Phone: </label></h4>
          <input type="text" placeholder="Enter your Phone number"></input>
        </div>
        <div id="Message">
          <h4><label htmlFor="Message">Message: </label></h4>
          <input type="text" placeholder="Enter a message"></input>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
