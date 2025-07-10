import React, { useState } from 'react';

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    
    // Only update if value is between 0 and 100
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setPercentage(value);
    } else if (e.target.value === '') {
      setPercentage('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h3>Progress Bar</h3>

      <input
        type="number"
        value={percentage}
        onChange={handleChange}
        placeholder="Enter percentage (0–100)"
        min="0"
        max="100"
        style={{ padding: '0.5rem', width: '60%' }}
      />

      <div
        style={{
          marginTop: '1rem',
          width: '100%',
          height: '25px',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: '#4caf50',
            transition: 'width 0.3s ease',
            textAlign: 'center',
            color: 'white',
            lineHeight: '25px',
          }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
