import React, { useState } from 'react';
import InputText from './components/InputTextBar';
import TodoListItems from './components/TodoListItems';

function App() {
  const [todoItems, setTodoItems] = useState([{ name: 'Trotar', complete: false, priority: false }]);

  const handleAddTodoItem = (todoInput) => {
    setTodoItems([...todoItems, { name: todoInput, complete: false, priority: false }]);
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
