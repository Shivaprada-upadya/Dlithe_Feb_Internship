import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
    else {alert("Write Something")}
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">TODO List</h2>
      
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task"
        />
        <button className="add-button" onClick={handleAddTask}>
          ADD
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span 
              className={`todo-text ${task.completed ? 'completed' : ''}`}
              onClick={() => toggleComplete(index)}
            >
              {task.text}
            </span>
            <div className="button-group">
              <button 
                className={`done-button ${task.completed ? 'completed' : ''}`}
                onClick={() => toggleComplete(index)}
              >
                Done
              </button>
              <button 
                className="delete-button"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;