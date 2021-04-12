import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    console.log(todoItemsSortedByRadioBtnSelection)
  }, [todoItemsSortedByRadioBtnSelection])
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
  )
}

export default TodoListItems;


const TodoListItem = ({ todoItem, removeTodoItem, completeTodoItem, priorityTodo }) => {
  const { name, isComplete, priority } = todoItem;
  const iconStyle = { fill: 'blue', size: '20px' }

  return (
    <ListGroup.Item variant="primary">
      <Row>
        <Col xs='2' md='2' lg='1' >
          {!priority ?
            <AiOutlineStar style={iconStyle} onClick={() => priorityTodo(todoItem)} />
            :
            <AiFillStar style={iconStyle} onClick={() => priorityTodo(todoItem)} />
          }
          <input type='checkbox' name='complete' checked={isComplete}
            onChange={(e) => completeTodoItem(e, todoItem)}
          />
        </Col>
        <Col>
          {name}
        </Col>
        <Col xs='4' md='2' lg="2">
          <Button variant='danger' onClick={() => {
            const removeItemConfirmation = window.confirm('Are you sure that you want to remove this to-do item?');
            removeItemConfirmation && removeTodoItem(todoItem);
          }}>Remove</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}
