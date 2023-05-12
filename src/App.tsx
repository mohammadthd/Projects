import React, { useState } from 'react';
import './App.css';


interface TodoItem {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: newTodo,
      };

      setTodoItems(prevTodoItems => [...prevTodoItems, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id: number) => {
    setTodoItems(prevTodoItems =>
      prevTodoItems.filter(todoItem => todoItem.id !== id)
    );
  };

  return (
    <div className="container">
    <h1 className="title">Todo List</h1>
    <div className="input-container">
      <input
        type="text"
        className="input-field"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Enter a new todo item..."
      />
      <button className="button" onClick={handleAddTodo}>Add</button>
    </div>
    <ul className="todo-list">
      {todoItems.map(todoItem => (
        <li className="todo-item" key={todoItem.id}>
          <span className="todo-text">{todoItem.text}</span>
          <button className="todo-remove-button" onClick={() => handleRemoveTodo(todoItem.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default App;
