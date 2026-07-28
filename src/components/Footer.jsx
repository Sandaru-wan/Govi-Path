import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', color: '#fca311' }}>
              <img src="/GoviPathLogo.svg" alt="GoviPath360 Logo" style={{ width: '32px', height: '32px' }} /> GoviPath360
            </h4>
            <p>Bridging the gap between farmers and the market with innovative digital solutions and smart cold-storage networks.</p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/market">Marketplace</Link></li>
              <li><Link to="/storage">Smart Storage</Link></li>
              <li><Link to="/auth">Sign In / Register</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><MapPin size={18} /> Colombo, Sri Lanka</li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Phone size={18} /> +94 112 345 678</li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Mail size={18} /> info@govipath360.lk</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GoviPath360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
