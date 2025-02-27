// src/pages/Contact.js
// import { emailjs } from '@emailjs/browser';
import emailjs from 'emailjs-com';

import React, { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_0jns6ad';
    const templateId = 'template_ru808ow';
    const publicKey = 'eaMHMCphxSUCU0-nQ';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Tenzin',
      message: message,
    }
console.log(emailjs)
    emailjs.send(serviceId,templateId,templateParams,publicKey)
      .then((response) => {
        console.log('Email sent Successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:',error);
      });
  }

  return (
    <div className="page-container">
      <div className="contact">
        <h1>CONTACT ME</h1>
        <p>I’d love to hear from you! Feel free to reach out.</p>
        <div className="contact-address">
          <section className="email">
            <i class="fa-solid fa-paper-plane"></i>
            <h3>Email</h3>
            <a href="mailto:tenthinten@gmail.com">tenthinten@gmail.com</a>
          </section>
          <section className="address">
            <i class="fa-solid fa-location-dot"></i>
            <h3>Address</h3>
            <p>Toronto, ON</p>
          </section>
        </div>

        <div className="contact-message">
          <h3>GET IN TOUCH</h3>
          <form onSubmit={handleSubmit} className='emailForm'>
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea placeholder="Your Message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
