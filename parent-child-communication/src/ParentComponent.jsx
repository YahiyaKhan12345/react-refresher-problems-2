import React, { useState } from 'react';
import ChildCounter from './ChildCounter';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1>Parent Component</h1>
      <button onClick={reset} style={{ marginBottom: '1rem' }}>
        Reset Child Counter
      </button>
      <ChildCounter 
        count={count} 
        onIncrement={increment} 
        onDecrement={decrement} 
      />
    </div>
  );
}

export default ParentComponent;
