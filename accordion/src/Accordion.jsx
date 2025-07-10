import React, { useState } from 'react';

function Accordion({ panels }) {
  const [openIndex, setOpenIndex] = useState(null); // No panel open initially

  const togglePanel = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index); // open selected panel
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '1rem auto' }}>
      {panels.map((panel, index) => (
        <div key={index} style={{ border: '1px solid #ccc', marginBottom: '0.5rem' }}>
          <div
            onClick={() => togglePanel(index)}
            style={{
              padding: '0.75rem',
              backgroundColor: '#f0f0f0',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {panel.title}
          </div>
          {openIndex === index && (
            <div style={{ padding: '0.75rem', backgroundColor: '#fafafa' }}>
              {panel.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
