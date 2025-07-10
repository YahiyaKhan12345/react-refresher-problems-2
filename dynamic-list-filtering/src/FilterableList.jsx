import React, { useState } from 'react';

function FilterableList() {
  const [searchTerm, setSearchTerm] = useState('');

  const items = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Mango', 'Orange'];


  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input 
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No matching items</li>
        )}
      </ul>
    </div>
  );
}

export default FilterableList;
