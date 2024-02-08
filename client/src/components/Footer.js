import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <h2 style={{ marginBottom: '15px' }}>For More Info;</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ margin: '0 10px' }}>
          Contact us:
          <a href="tel:0700758694">0700758694</a>
        </p>
        <p style={{ margin: '0 10px' }}>
          Email us:
          <a href="mailto:contact@example.com">onlinemarket@gmail.com</a>
        </p>
        <p style={{ margin: '0 10px' }}>
          Location:
          <a href="https://www.google.com/maps/">Google Map</a>
        </p>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: '#3498db', // Change this line to set your desired color
  padding: '20px',
  textAlign: 'center',
  borderTop: '2px solid #ccc',
  color: 'white', // Text color for better visibility on the background
};

export default Footer;