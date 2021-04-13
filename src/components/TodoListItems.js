import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoListItem from './TodoListItem';
import ListGroup from 'react-bootstrap/ListGroup';


const TodoListItems = ({ todoItems, removeTodoItem, completeTodoItem, priorityTodo, radioBtnSelected }) => {

  const todoItemsSortedByRadioBtnSelection = todoItems.filter((item) => {
    switch (radioBtnSelected.value) {
      case '0': return item;
      case '1': return item?.isComplete === false;
      case '2': return item?.isComplete === true;
      default: return item;
    }
  })
  // For testing --------------------------------
  useEffect(() => {
    console.log(todoItemsSortedByRadioBtnSelection);
  }, [todoItemsSortedByRadioBtnSelection]);
  // ---------------------------------------------

  return (
    <ListGroup>
      {todoItemsSortedByRadioBtnSelection.map((item) => {
        return <TodoListItem key={uuidv4()}
          todoItem={item}
          removeTodoItem={removeTodoItem}
          completeTodoItem={completeTodoItem}
          priorityTodo={priorityTodo}
        />
      })}
    </ListGroup>
  );
};

export default TodoListItems;

