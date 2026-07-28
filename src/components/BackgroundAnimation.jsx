import React from 'react';
import { Leaf } from 'lucide-react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  // Create an array of leaves with random starting positions, sizes, and animation durations
  const leaves = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `-${Math.random() * 20}s`,
    size: 20 + Math.random() * 30,
    opacity: 0.1 + Math.random() * 0.2,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="leaf-container">
      {leaves.map((leaf) => (
        <div 
          key={leaf.id} 
          className="falling-leaf"
          style={{
            left: leaf.left,
            animationDuration: leaf.animationDuration,
            animationDelay: leaf.animationDelay,
          }}
        >
          <Leaf 
            size={leaf.size} 
            color="var(--primary)" 
            style={{
              opacity: leaf.opacity,
              transform: `rotate(${leaf.rotation}deg)`,
            }} 
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
