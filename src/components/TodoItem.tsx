import React from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <span>{text}</span>
    </div>
  );
};

export default TodoItem;
