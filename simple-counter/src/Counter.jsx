import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>{' '}
      <button onClick={decrement} disabled={count === 0}>Decrement</button>
    </div>
  );
}

export default Counter;
