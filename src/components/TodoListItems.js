import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoListItem from './TodoListItem';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoListItems = ({ todoItemsSortedByRadioBtnSelection, removeTodoItem, completeTodoItem, priorityTodo }) => {

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

