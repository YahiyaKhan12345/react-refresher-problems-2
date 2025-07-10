import React, { useState } from 'react';

function TextInputMirror() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..." 
        style={{ padding: '0.5rem', width: '100%' }}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInputMirror;
