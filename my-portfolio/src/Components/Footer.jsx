import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Created footer.</p>
    </footer>
  );
};

export default Footer;