import React from 'react';
import './App.css';
import Todos from './component/Todos';
import Todo from './models/todo';

function App() {
  const todoLists = [new Todo('Learn HTML'), new Todo('Learn CSS'), 
                    new Todo('Learn JS'), new Todo('Learn React'),
                    new Todo('Learn TypeScript')];
  return (
    <div >
      <Todos items={todoLists}/>
    </div>
  );
}

export default App;
