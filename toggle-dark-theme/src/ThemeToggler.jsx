import React, { useState } from 'react';

function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    // Toggle dark mode class on the <body>
    document.body.classList.toggle('dark-mode');
    // Update local state
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={toggleTheme}>
        {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeToggler;
