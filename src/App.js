import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './components/title/Title';
import InputText from './components/inputTextBar/InputTextBar';
import TodoListItems from './components/todoListItems/TodoListItems';
import Filters from './components/filters/Filters';
import MainMessage from './components/mainMessage/MainMessage';
import Container from 'react-bootstrap/Container';
// import { addToStorage } from './components/tools/localStorage';

function App() {
  const [todoItemIndex, setTodoItemIndex] = useState(0);
  const [todoItems, setTodoItems] = useState([]);
  const [radioBtnSelected, setRadioBtnSelected] = useState({ value: 0, name: 'Display all' });
  const [messageToDisplay, setMessageToDisplay] = useState('Create a To-do!');

  const handleAddTodoItem = (todoInputName) => {
    if (todoInputName.replace(/\s/g, '') === '') {
      alert('You must enter a name for the To-do!');
    } else {
      const capitalizedTodo = `${todoInputName[0].toUpperCase()}${todoInputName.slice(1)}`;
      setTodoItemIndex(todoItemIndex + 1);
      setTodoItems([...todoItems, { id: uuidv4(), index: todoItemIndex, name: capitalizedTodo, isComplete: false, priority: false }]);
    }
    document.querySelector('#todo-name-input').value = '';
  };

  const handleRemoveTodoItem = (todoItem) => {
    const newTodoItemList = todoItems.filter(item => item.id !== todoItem.id);
    setTodoItems(newTodoItemList);
  };

  const handleCompleteTodoItem = (event, todoItem) => {
    setTodoItems(prevState => {
      todoItem.isComplete = event.target.checked;
      return [...prevState];
    });
  };

  const handlePriorityTodo = (todoItem) => {
    const todoItemPriority = todoItem.priority;
    setTodoItems(prevState => {
      todoItem.priority = !todoItemPriority;
      return [...prevState];
    });
  };

  const handleRemoveAllTodoItems = () => {
    setTodoItems([]);
  }

  const todoItemsSortedByRadioBtnSelection = todoItems.filter((item) => {
    switch (radioBtnSelected.name) {
      case 'To-do': return item?.isComplete === false;
      case 'Complete': return item?.isComplete === true;
      default: return item;
    };
  });

  useEffect(() => {
    if (todoItemsSortedByRadioBtnSelection.length === 0) {
      const { value } = radioBtnSelected;
      value === 0 && setMessageToDisplay('Create a To-do!');
      value === 1 && setMessageToDisplay('No To-do tasks!');
      value === 2 && setMessageToDisplay('No Complete tasks!');
    };
  }, [radioBtnSelected, todoItemsSortedByRadioBtnSelection]);


  // get whatever there is saved in todos in the local storage 
  const getFromStorage = () => {
    const reference = localStorage.getItem('todos');
    // if reference exists
    if (reference) {
      // converts back to array and store it in a todos array
      setTodoItems(JSON.parse(reference));
    }
  }
  useEffect(() => {
    getFromStorage();
  }, []);

  const addToStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  useEffect(() => {
    addToStorage(todoItems)
    // console.log(localStorage);
  }, [todoItems], [])

  return (
    <Container>
      <header>
        <Title />
        <br />
        <InputText addTodoItem={handleAddTodoItem} />
      </header>
      <main>
        <section>
          <Filters
            todoItems={todoItems}
            setTodoItems={setTodoItems}
            setRadioBtnSelected={setRadioBtnSelected}
          />
        </section>
        <section>
          {todoItemsSortedByRadioBtnSelection.length ?
            <TodoListItems
              removeTodoItem={handleRemoveTodoItem}
              completeTodoItem={handleCompleteTodoItem}
              priorityTodo={handlePriorityTodo}
              todoItemsSortedByRadioBtnSelection={todoItemsSortedByRadioBtnSelection}
              removeAllTodoItems={handleRemoveAllTodoItems}
            />
            :
            <MainMessage messageToDisplay={messageToDisplay} />
          }
        </section>
      </main>
    </Container>
  );
};

export default App;
