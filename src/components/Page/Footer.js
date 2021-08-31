import React from 'react';
import { Link } from 'react-router-dom';
import './page.scss';

const Footer = () => (
  <footer className='footer'>
    <Link 
      to="/legal-mention"
      className="footer-link"
    >
      Mentions légales
    </Link>
    <Link 
      to="/about"
      className="footer-link"
    >
      A propos
    </Link>
  </footer>

);

export default Footer;
