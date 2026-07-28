import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar glass-panel" style={{ margin: '20px auto', width: '90%', borderRadius: '50px', padding: '15px 30px' }}>
      <div className="nav-container" style={{ maxWidth: '100%' }}>
        <Link to="/" className="logo">
          <Leaf color="#2d6a4f" size={28} />
          Govi<span>Path</span>360
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/market" className={`nav-link ${isActive('/market')}`}>Market</Link>
          <Link to="/storage" className={`nav-link ${isActive('/storage')}`}>Smart Storage</Link>
          <Link to="/auth" className="btn btn-primary" style={{ padding: '8px 20px' }}>
            <LogIn size={18} /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
