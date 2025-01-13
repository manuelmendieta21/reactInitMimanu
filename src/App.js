import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'; // Aquí importa TodoList
import { CreateTodoButton } from './CreateTodoButton';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Cortar el césped', completed: false },
    { id: 2, text: 'Comprar comida', completed: true },
    { id: 3, text: 'Pasear al perro', completed: false },
    { id: 4, text: 'Hacer la tarea', completed: true },
    { id: 5, text: 'Estudiar', completed: false },
    {id: 6, text: 'Hacer ejercicio', completed: false}
  ]);

  // Cambia el estado de la tarea (completada / pendiente)
  const toggleCompleted = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Cálculo de tareas finalizadas
  const tareasFinalizadas = todos.filter(todo => todo.completed).length;
  const totality = todos.length;

  return (
    
      <div className="relative isolate overflow-hidden bg-gray-900 py-9 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-3 lg:px-7">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-3 lg:max-w-none lg:grid-cols-2">
            <TodoSearch />
            <TodoCounter completed={tareasFinalizadas} total={totality} />
            
            <CreateTodoButton />
            
            <TodoList todos={todos} toggleCompleted={toggleCompleted} /> {/* Usamos el componente importado */}
            <div className="flex justify-center">

            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;