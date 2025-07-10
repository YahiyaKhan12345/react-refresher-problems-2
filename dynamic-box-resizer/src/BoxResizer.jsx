import React, { useState } from 'react';

function BoxResizer() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const step = 20;
  const minSize = 20;

  // Width Handlers
  const increaseWidth = () => setWidth(width + step);
  const decreaseWidth = () => {
    if (width > minSize) setWidth(width - step);
  };

  // Height Handlers
  const increaseHeight = () => setHeight(height + step);
  const decreaseHeight = () => {
    if (height > minSize) setHeight(height - step);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: 'skyblue',
          margin: '0 auto',
          transition: '0.3s ease',
        }}
      ></div>

      <div style={{ marginTop: '1rem' }}>
        <h4>Width Controls</h4>
        <button onClick={increaseWidth}>Increase Width</button>{' '}
        <button onClick={decreaseWidth} disabled={width <= minSize}>
          Decrease Width
        </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h4>Height Controls</h4>
        <button onClick={increaseHeight}>Increase Height</button>{' '}
        <button onClick={decreaseHeight} disabled={height <= minSize}>
          Decrease Height
        </button>
      </div>

      <p>Box size: {width}px × {height}px</p>
    </div>
  );
}

export default BoxResizer;
