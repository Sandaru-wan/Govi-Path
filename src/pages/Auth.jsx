import React, { useState } from 'react';
import { Mail, Lock, User, Phone, MapPin } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {isLogin ? 'Sign in to access the marketplace and storage.' : 'Join GoviPath360 to connect with the market.'}
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <>
              <div className="input-group" style={{ position: 'relative' }}>
                <label>Full Name</label>
                <User size={18} color="var(--text-muted)" style={{ position: 'absolute', bottom: '14px', left: '15px' }} />
                <input type="text" placeholder="John Doe" style={{ paddingLeft: '45px' }} />
              </div>
              
              <div className="input-group" style={{ position: 'relative' }}>
                <label>Phone Number</label>
                <Phone size={18} color="var(--text-muted)" style={{ position: 'absolute', bottom: '14px', left: '15px' }} />
                <input type="tel" placeholder="+94 7X XXX XXXX" style={{ paddingLeft: '45px' }} />
              </div>

              <div className="input-group" style={{ position: 'relative' }}>
                <label>Location / District</label>
                <MapPin size={18} color="var(--text-muted)" style={{ position: 'absolute', bottom: '14px', left: '15px' }} />
                <select style={{ paddingLeft: '45px' }}>
                  <option value="">Select District</option>
                  <option value="colombo">Colombo</option>
                  <option value="kandy">Kandy</option>
                  <option value="nuwara_eliya">Nuwara Eliya</option>
                  <option value="jaffna">Jaffna</option>
                </select>
              </div>
            </>
          )}

          <div className="input-group" style={{ position: 'relative' }}>
            <label>Email Address</label>
            <Mail size={18} color="var(--text-muted)" style={{ position: 'absolute', bottom: '14px', left: '15px' }} />
            <input type="email" placeholder="you@example.com" style={{ paddingLeft: '45px' }} />
          </div>

          <div className="input-group" style={{ position: 'relative' }}>
            <label>Password</label>
            <Lock size={18} color="var(--text-muted)" style={{ position: 'absolute', bottom: '14px', left: '15px' }} />
            <input type="password" placeholder="••••••••" style={{ paddingLeft: '45px' }} />
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1.1rem', marginTop: '10px' }}>
            {isLogin ? 'Sign In' : 'Register Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '25px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '25px' }}>
          <p style={{ margin: 0 }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
