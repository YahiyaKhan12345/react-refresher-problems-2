import React from 'react';
import ThemeToggler from './ThemeToggler';
import './App.css'; // make sure to import your CSS with the dark-mode class

function App() {
  return (
    <div>
      <h1>Theme Toggler</h1>
      <ThemeToggler />
      <p>This is some sample text to see the theme effect.</p>
    </div>
  );
}

export default App;
