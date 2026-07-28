import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Plus, Tag } from 'lucide-react';

const Market = () => {
  const [search, setSearch] = useState('');

  // Mock data for the marketplace
  const products = [
    { id: 1, name: 'Fresh Carrots', price: 'Rs. 250/kg', farmer: 'Sunil Silva', location: 'Nuwara Eliya', tag: 'Fresh Harvest' },
    { id: 2, name: 'Organic Tomatoes', price: 'Rs. 180/kg', farmer: 'Nimal Perera', location: 'Kandy', tag: 'Organic' },
    { id: 3, name: 'Red Onions', price: 'Rs. 320/kg', farmer: 'Jaffna Farmers Coop', location: 'Jaffna', tag: 'Bulk Available' },
    { id: 4, name: 'Green Beans', price: 'Rs. 150/kg', farmer: 'Kamal Bandara', location: 'Badulla', tag: 'Just Added' },
    { id: 5, name: 'Potatoes', price: 'Rs. 210/kg', farmer: 'Saman Kumara', location: 'Nuwara Eliya', tag: 'Cold Stored' },
    { id: 6, name: 'Cabbage', price: 'Rs. 120/kg', farmer: 'Wimal Fernando', location: 'Bandarawela', tag: 'Fresh Harvest' },
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Marketplace</h1>
          <p style={{ margin: '5px 0 0 0' }}>Buy directly from farmers at fair prices.</p>
        </div>
        
        <button className="btn btn-primary">
          <Plus size={18} /> Add New Listing
        </button>
      </div>

      {/* Search and Filter */}
      <div className="glass-panel" style={{ padding: '20px', marginBottom: '40px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '250px', position: 'relative' }}>
          <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search for crops, vegetables, fruits..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '8px', border: '1px solid #ced4da', fontSize: '1rem' }}
          />
        </div>
        
        <button className="btn btn-outline" style={{ background: 'white' }}>
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
        {products.map(product => (
          <div key={product.id} className="card">
            <div style={{ height: '180px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '15px', right: '15px', background: 'white', color: 'var(--primary-dark)', padding: '5px 10px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px', boxShadow: 'var(--shadow-sm)' }}>
                <Tag size={12} /> {product.tag}
              </span>
              <ShoppingBag size={48} color="var(--primary-light)" opacity={0.5} />
            </div>
            
            <div style={{ padding: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{product.name}</h3>
                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.2rem' }}>{product.price}</span>
              </div>
              
              <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem' }}><strong>Farmer:</strong> {product.farmer}</p>
              <p style={{ margin: '0 0 20px 0', fontSize: '0.9rem' }}><strong>Location:</strong> {product.location}</p>
              
              <button className="btn btn-outline" style={{ width: '100%' }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
