import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputText from './components/InputTextBar';
import TodoListItems from './components/TodoListItems';

function App() {
  const [todoItems, setTodoItems] = useState([{ id: uuidv4(), name: 'Trotar', isComplete: false, priority: false }]);

  const handleAddTodoItem = (todoInput) => {
    setTodoItems([...todoItems, { id: uuidv4(), name: todoInput, isComplete: false, priority: false }]);
    document.querySelector('#todo-name-input').value = '';
  }

  const handleRemoveTodoItem = (todoItem) => {
    const newTodoItemList = todoItems.filter(item => item.id !== todoItem.id);
    setTodoItems(newTodoItemList);
  }

  const handleCompleteTodoItem = (event, todoItem) => {
    setTodoItems(prevState => {
      todoItem.isComplete = event.target.checked;
      return [...prevState];
    });
    // DEFINE HERE THE VISUAL CHANGES FOR WHEN A TASK GETS MARKED AS DONE!
  }

  // Purely for testing -----------------
  useEffect(() => {
    if (todoItems.length >= 1) {
      console.log(todoItems.length)
      console.log('IS COMPLETE')
      console.log(todoItems[0].isComplete)
      console.log('PRIORITY')
      console.log(todoItems[0].priority)
    }
    return null;
  }, [todoItems]);
  // ------------------------------------

  const handlePriorityTodo = (todoItem) => {
    const todoItemPriority = todoItem.priority;
    setTodoItems(prevState => {
      todoItem.priority = !todoItemPriority;
      return [...prevState];
    });
  }

  return (
    <div className='container'>
      <header>
        <h1>To-do List App</h1>
        <InputText addTodoItem={handleAddTodoItem} />
      </header>
      <main>
        <TodoListItems
          todoItems={todoItems}
          removeTodoItem={handleRemoveTodoItem}
          completeTodoItem={handleCompleteTodoItem}
          priorityTodo={handlePriorityTodo}
        />
      </main>
    </div>
  );
}

export default App;
