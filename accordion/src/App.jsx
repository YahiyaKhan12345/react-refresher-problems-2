import React from 'react';
import Accordion from './Accordion';

const accordionData = [
  {
    title: 'Panel 1: Introduction',
    content: 'Welcome to the first panel. Here is some introductory content.'
  },
  {
    title: 'Panel 2: Details',
    content: 'This panel contains more detailed information.'
  },
  {
    title: 'Panel 3: Conclusion',
    content: 'Thank you for reading! This is the final panel.'
  }
];

function App() {
  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion panels={accordionData} />
    </div>
  );
}

export default App;
