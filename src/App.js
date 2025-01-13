
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

]



function App() {
  return (
    
    <React.Fragment>
          <br>
      </br>
      <TodoCounter completed={5} total={10} />
      <TodoSearch/>

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
    </React.Fragment>

  );
}

export default App;
