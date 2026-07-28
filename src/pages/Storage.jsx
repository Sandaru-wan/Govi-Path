import React from 'react';
import { Thermometer, Clock, Database, CheckCircle, AlertTriangle } from 'lucide-react';

const Storage = () => {
  // Mock data for storage units
  const storageUnits = [
    { id: 'ST-001', location: 'Dambulla Eco-Cold Storage', capacity: '85%', temp: '4.2°C', status: 'Optimal', items: 'Carrots, Tomatoes' },
    { id: 'ST-002', location: 'Nuwara Eliya Hub', capacity: '92%', temp: '3.8°C', status: 'Optimal', items: 'Potatoes, Cabbage' },
    { id: 'ST-003', location: 'Jaffna Regional Facility', capacity: '45%', temp: '5.5°C', status: 'Warning', items: 'Onions, Chillies' },
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Smart Storage System</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Real-time monitoring of cold storage facilities to reduce waste and preserve freshness.
        </p>
      </div>

      {/* Dashboard Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '50px' }}>
        <div className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'var(--primary)', color: 'white', padding: '15px', borderRadius: '12px' }}>
            <Database size={32} />
          </div>
          <div>
            <h4 style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Capacity Used</h4>
            <h2 style={{ margin: 0, fontSize: '2rem' }}>74%</h2>
          </div>
        </div>
        
        <div className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'var(--accent)', color: 'var(--primary-dark)', padding: '15px', borderRadius: '12px' }}>
            <Thermometer size={32} />
          </div>
          <div>
            <h4 style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Avg. Temperature</h4>
            <h2 style={{ margin: 0, fontSize: '2rem' }}>4.5°C</h2>
          </div>
        </div>
        
        <div className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: '#fca311', color: 'white', padding: '15px', borderRadius: '12px' }}>
            <Clock size={32} />
          </div>
          <div>
            <h4 style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Avg. Storage Time</h4>
            <h2 style={{ margin: 0, fontSize: '2rem' }}>14 Days</h2>
          </div>
        </div>
      </div>

      {/* Active Storage Facilities */}
      <h2 style={{ marginBottom: '25px' }}>Active Facilities (IoT Monitored)</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {storageUnits.map(unit => (
          <div key={unit.id} className="card" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ background: 'var(--bg-color)', padding: '5px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                {unit.id}
              </span>
              {unit.status === 'Optimal' ? (
                <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600', fontSize: '0.9rem' }}>
                  <CheckCircle size={16} /> {unit.status}
                </span>
              ) : (
                <span style={{ color: '#fca311', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600', fontSize: '0.9rem' }}>
                  <AlertTriangle size={16} /> {unit.status}
                </span>
              )}
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{unit.location}</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span>Capacity</span>
                <span style={{ fontWeight: '600' }}>{unit.capacity}</span>
              </div>
              <div style={{ width: '100%', background: '#e9ecef', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: unit.capacity, background: parseInt(unit.capacity) > 90 ? '#fca311' : 'var(--primary)', height: '100%' }}></div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '30px', marginBottom: '25px' }}>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '5px' }}>Temperature</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}>
                  <Thermometer size={16} color="var(--primary)" /> {unit.temp}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '5px' }}>Main Items</span>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{unit.items}</span>
              </div>
            </div>
            
            <button className="btn btn-outline" style={{ width: '100%' }}>View Full Sensor Data</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storage;
