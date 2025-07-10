import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('gray');

  const colors = ['Red', 'Green', 'Blue', 'Yellow'];

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color.toLowerCase(),
          margin: '0 auto 1rem',
          border: '2px solid #333',
          transition: 'background-color 0.3s ease'
        }}
      ></div>

      <div>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              margin: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: c.toLowerCase(),
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
