

import React from 'react';
import './contact.css';  // Assuming you have a separate CSS file for styles

function Contact() {
  return (
    <div className="contacts" style={{ textAlign: 'center', color: 'white' }}>
      <h1 style={{ marginTop: '400px' }}>Contact us</h1>
      <h2>
        <a href="mailto:support@rcadia.xyz" style={{ color: 'white', textDecoration: 'none' }}>
          support@rcadia.xyz
        </a>
      </h2>
    </div>
  );
}

export default Contact;
