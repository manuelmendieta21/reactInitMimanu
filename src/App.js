
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import  React  from 'react';


const defaultTodos=[{
  text: 'Cortar el césped',
  completed: 'false',
},
{
  text: 'Comprar comida',
  completed: 'true',
},
{
  text: 'Pasear al perro',
  completed: 'false',
},
{
  text: 'Hacer la tarea',
  completed: 'true',
},
{
  text: 'Estudiar',
  completed: 'false',
},

]

const totality = defaultTodos.filter(todo => todo.completed).length;

function App() {
  return (
    /*React Fragment  renderiza sin usar el dev al devolver app en el root */
    <React.Fragment>
      <div className=" bg-gray-900 py-9 sm:py-24 lg:py-32" >
      <div className="mx-auto max-w-5xl px-3 lg:px-7">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
       
        <TodoSearch/>
        <TodoCounter completed={2} total={totality} />
        <TodoList> 
          {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
          ))}
       
      </TodoList> 
      <div className="flex justify-center">
        <CreateTodoButton/>
      </div>

      </div>
    </div>
    </div>
    </React.Fragment>

  );
}

export default App;
