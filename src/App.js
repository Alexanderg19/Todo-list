import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso React Js', completed: false },
  { text: 'Bañar perro', completed: true },
  { text: 'Saludar', completed: true },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={18} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

