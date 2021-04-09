import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputText from './components/InputTextBar';
import TodoListItems from './components/TodoListItems';

function App() {
  const [todoItems, setTodoItems] = useState([{ id: uuidv4(),name: 'Trotar', complete: false, priority: false }]);

  const handleAddTodoItem = (todoInput) => {
    setTodoItems([...todoItems, { id: uuidv4(), name: todoInput, complete: false, priority: false }]);
    document.querySelector('#todo-name-input').value = '';
  }


  return (
    <div className='container'>
      <header>
        <h1>Todo List</h1>
        <InputText handleAddTodoItem={handleAddTodoItem} />
      </header>
      <main>
        {/* <ul> */}
        {/* {todoItems.map((todoItem, index) => {
            return <TodoListItems key={index} todoItems={todoItem} />
          })} */}
        <TodoListItems todoItems={todoItems} />
        {/* </ul> */}
      </main>
    </div>
  );
}

export default App;
