import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Thermometer, Bell, Zap, Globe, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero" style={{ padding: '80px 0 120px', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ background: 'var(--accent)', color: 'var(--primary-dark)', padding: '8px 16px', borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>
            Empowering Sri Lankan Farmers
          </span>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '20px', lineHeight: '1.1' }}>
            Bridging the gap between <br/> <span style={{ color: 'var(--primary)' }}>Farmers & The Market</span>
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 40px', color: 'var(--text-muted)' }}>
            GoviPath360 eliminates middlemen to ensure fair prices. Our platform integrates smart cold-storage networks to reduce food waste and provide a stable supply of fresh items.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/market" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Explore Market <ArrowRight size={20} />
            </Link>
            <Link to="/auth" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>Functional Requirements</h2>
            <p>Everything you need to buy and sell produce efficiently.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Feature 1 */}
            <div className="card" style={{ padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Users size={36} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>User Accounts & Market</h3>
              <p>Farmers and buyers can easily sign up and create profiles. Admins manage users and approve new listings to ensure quality and trust.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="card" style={{ padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Thermometer size={36} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Smart Storage System</h3>
              <p>Tracks how much produce is in cold storage and for how long. Uses advanced sensors to check temperature and maintain freshness.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="card" style={{ padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Bell size={36} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Alerts & Reports</h3>
              <p>Instant notifications for orders and price changes. Stay updated on market trends and get alerts directly on your device.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Non-functional Requirements (Why choose us) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Built for <br/><span style={{ color: 'var(--primary)' }}>Growth & Reliability</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>GoviPath360 is designed with a strong focus on security, performance, and accessibility to serve farmers across Sri Lanka.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <ShieldCheck size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>Security & Privacy</h4>
                    <p style={{ margin: 0 }}>Personal information is securely stored and protected from unauthorized access.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <Zap size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>Performance & Speed</h4>
                    <p style={{ margin: 0 }}>Works smoothly even with slow internet. Get instant price and order updates.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <Globe size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>Usability (Sinhala & Tamil)</h4>
                    <p style={{ margin: 0 }}>Very easy to use for all farmers. Support for Sinhala and Tamil languages to reach everyone.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div className="glass-panel" style={{ padding: '40px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white' }}>
                <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>Ready to transform your agricultural business?</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>
                  Join thousands of users and storage locations currently utilizing GoviPath360.
                </p>
                <Link to="/auth" className="btn btn-secondary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}>
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
