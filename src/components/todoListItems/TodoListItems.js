import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoListItem from './TodoListItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TodoListItems = ({ todoItemsSortedByRadioBtnSelection, removeTodoItem, completeTodoItem, priorityTodo, removeAllTodoItems }) => {
  return (
    <React.Fragment >
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
      {todoItemsSortedByRadioBtnSelection.length >= 2 &&
        <Col className='text-center mt-4'>
          <Button variant="danger"
            onClick={() => {
              const confirmationMessage = window.confirm('Are you sure that you want to remove all the items in the list? This action cannot be undone!');
              confirmationMessage && removeAllTodoItems();
            }}
          >
            Remove All List Items!
        </Button>
        </Col>
      }
    </React.Fragment >
  );
};

export default TodoListItems;

