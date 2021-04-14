import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { DiCodeigniter } from 'react-icons/di'
import { ImBin2 } from 'react-icons/im'

const TodoListItem = ({ todoItem, removeTodoItem, completeTodoItem, priorityTodo }) => {
  const { name, isComplete, priority } = todoItem;
  const styledTodoNameWhenComplete = !isComplete ? <b>{name}</b> : <del style={{ color: 'gray' }}>{name}</del>;

  return (
    <ListGroup.Item variant={isComplete && 'primary'}>
      <Row>
        <Col xs='2' md='1' lg='1' >
          <DiCodeigniter fill={!priority ? 'black' : 'orange'} size='30' onClick={() => priorityTodo(todoItem)} />
        </Col>

        <Col xs='1' md='1' lg='1' >
          <input type='checkbox' name='complete' checked={isComplete}
            onChange={(e) => completeTodoItem(e, todoItem)}
          />
        </Col>

        <Col className='mt-2'>
          {styledTodoNameWhenComplete}
        </Col>

        <Col xs='2' md='1' lg='1'>
          <Button variant='danger' onClick={() => {
            const removeItemConfirmation = window.confirm('Are you sure that you want to remove this to-do item?');
            removeItemConfirmation && removeTodoItem(todoItem);
          }}><ImBin2 fill='white' />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default TodoListItem;