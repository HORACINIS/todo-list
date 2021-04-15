import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const textSyle = {
  border: 'solid 1px grey',
  fontSize: '20px',
  fontWeight: '500'
}

const InputTextBar = ({ addTodoItem }) => {
  return (
    <Form>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='To-do name'
          aria-label='To-do name'
          aria-describedby='basic-addon2'
          id='todo-name-input'
          maxLength='50'
          style={textSyle}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              const todoTextInput = document.querySelector('#todo-name-input');
              addTodoItem(todoTextInput.value);
            }}
          >Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default InputTextBar;
