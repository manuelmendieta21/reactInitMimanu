import React from 'react';

function TodoItem(props) {
  return (
    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
      <div className="relative flex items-start w-full">
        <div className="flex items-center h-5">
          <input
            id={`checkbox-${props.id}`} 
            type="checkbox"
            checked={props.completed} // Si la tarea está completada, el checkbox se marca
            onChange={() => props.toggleCompleted(props.id)} // Cambia el estado cuando el checkbox cambia
            className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label
          htmlFor={`checkbox-${props.id}`} // Asocia el label con el checkbox y el id cuando se lee.
          className={`ms-3.5 ${props.completed ? 'line-through' : 'text-black'} block w-full text-sm text-gray-600 dark:text-neutral-500`}
        >
          {props.text}
        </label>
      </div>
      {/* Mostrar el estado de la tarea */}
      <span className={`ml-3 text-sm sm:text-base lg:text-lg ${props.completed ? 'text-green-600' : 'text-red-600'} dark:text-neutral-500`}>
  {props.completed ? 'Completada' : 'Pendiente'}
</span>
    </li>
  );
}

export { TodoItem };