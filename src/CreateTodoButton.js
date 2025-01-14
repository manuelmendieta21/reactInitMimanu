import React from 'react';

function CreateTodoButton({ addTodo }) {
    const handleClick = () => {
        const newTodoText = prompt("Ingrese la nueva tarea:");
        if (newTodoText) {
            addTodo(newTodoText);
        }
    };

    return (
        <div className="w-32 m-2">
            <button 
                type="button" 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleClick}
            >
                Agregar Task ＋ ➡️
            </button>
        </div>
    );
}

export { CreateTodoButton };