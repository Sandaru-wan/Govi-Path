import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Storage from './pages/Storage';
import Auth from './pages/Auth';
import BackgroundAnimation from './components/BackgroundAnimation';
import './index.css';

function App() {
  return (
    <Router>
      {/* Live Background Shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      
      <BackgroundAnimation />

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
