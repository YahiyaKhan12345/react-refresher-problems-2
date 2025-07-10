import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add task to list
  const handleAdd = () => {
    if (task.trim() === '') return; // avoid empty tasks

    const newTask = {
      id: Date.now(), // unique id based on current time
      text: task
    };

    setTasks([...tasks, newTask]);
    setTask(''); // clear input
  };

  // Delete task from list
  const handleDelete = (id) => {
    const filtered = tasks.filter((t) => t.id !== id);
    setTasks(filtered);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '1rem auto' }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '0.5rem', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ marginLeft: '0.5rem' }}>
        Add
      </button>

      <ul style={{ marginTop: '1rem' }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ marginBottom: '0.5rem' }}>
            {t.text}
            <button
              onClick={() => handleDelete(t.id)}
              style={{ marginLeft: '1rem', color: 'white', backgroundColor: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
