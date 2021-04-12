import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './components/Title';
import InputText from './components/InputTextBar';
import TodoListItems from './components/TodoListItems';
import Filters from './components/filters/Filters';
import MainMessage from './components/messages/MainMessage';
import Container from 'react-bootstrap/Container';

function App() {
  const [todoItemIndex, setTodoItemIndex] = useState(0);
  const [todoItems, setTodoItems] = useState([]);
  const [radioBtnSelected, setRadioBtnSelected] = useState({ value: 0, name: 'Display all' });

  const handleAddTodoItem = (todoInputName) => {
    if (todoInputName.replace(/\s/g, '') === '') {
      alert('You must enter a To-do name!')
    } else {
      const capitalizedTodo = `${todoInputName[0].toUpperCase()}${todoInputName.slice(1)}`;
      setTodoItemIndex(todoItemIndex + 1);
      setTodoItems([...todoItems, { id: uuidv4(), index: todoItemIndex, name: capitalizedTodo, isComplete: false, priority: false }]);
    }
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
  }

  const handlePriorityTodo = (todoItem) => {
    const todoItemPriority = todoItem.priority;
    setTodoItems(prevState => {
      todoItem.priority = !todoItemPriority;
      return [...prevState];
    });
  }

  return (
    <Container>
      <header>
        <Title />
        <br />
        <InputText addTodoItem={handleAddTodoItem} />
      </header>
      <main>
        <section>
          <Filters todoItems={todoItems}
            setTodoItems={setTodoItems}
            setRadioBtnSelected={setRadioBtnSelected}
          />
        </section>
        <section>
          {todoItems.length ?
            <TodoListItems
              todoItems={todoItems}
              removeTodoItem={handleRemoveTodoItem}
              completeTodoItem={handleCompleteTodoItem}
              priorityTodo={handlePriorityTodo}
              radioBtnSelected={radioBtnSelected}
            />
            :
            <MainMessage todoItems={todoItems} radioBtnSelected={radioBtnSelected} />
          }
        </section>
      </main>
    </Container>
  );
}

export default App;
