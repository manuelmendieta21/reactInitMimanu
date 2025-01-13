import React from 'react';
import { TodoItem } from './TodoItem';

function TodoList({ todos, toggleCompleted }) {
  return (
    <ul className="max-w-sm flex flex-col">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

export { TodoList };