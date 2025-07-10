import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');
  const maxLimit = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '1rem auto' }}>
      <textarea
        value={text}
        onChange={handleChange}
        rows="5"
        cols="40"
        placeholder="Type something..."
        style={{ width: '100%', padding: '0.5rem' }}
      />
      <p>Character Count: {text.length}/{maxLimit}</p>

      {text.length > maxLimit && (
        <p style={{ color: 'red' }}>⚠️ Character limit exceeded!</p>
      )}
    </div>
  );
}

export default CharacterCounter;
