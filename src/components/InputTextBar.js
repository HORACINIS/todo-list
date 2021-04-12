import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InputTextBar = ({ addTodoItem }) => {
  return (
    <Form>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='To-do name'
          aria-label='To-do name'
          aria-describedby='basic-addon2'
          id='todo-name-input'
        />
        {/* <input type='text' placeholder='To-do name' name='name' id='todo-name-input' /> */}
        <InputGroup.Append>
          <Button variant="outline-secondary" type='submit'
            onClick={(e) => {
              e.preventDefault();
              const todoTextInput = document.querySelector('#todo-name-input');
              addTodoItem(todoTextInput.value);
            }}
          >Add</Button>
        </InputGroup.Append>

        {/* <input type='submit' value='Add'
        onClick={(e) => {
          e.preventDefault();
          const todoTextInput = document.querySelector('#todo-name-input');
          addTodoItem(todoTextInput.value);
        }} /> */}
      </InputGroup>
    </Form>

    // <InputGroup className="mb-3">
    //   <FormControl
    //     placeholder="Recipient's username"
    //     aria-label="Recipient's username"
    //     aria-describedby="basic-addon2"
    //   />
    //   <InputGroup.Append>
    //     <Button variant="outline-secondary">Button</Button>
    //   </InputGroup.Append>
    // </InputGroup>
  )
}

export default InputTextBar;
