import React from 'react';

function ChildCounter({ count, onIncrement, onDecrement }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Child Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>{' '}
      <button onClick={onDecrement} disabled={count === 0}>Decrement</button>
    </div>
  );
}

export default ChildCounter;
