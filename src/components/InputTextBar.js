import React from 'react';

const InputTextBar = ({ handleAddTodoItem }) => {
  return (
    <React.Fragment>
      <form>
        <input type='text' placeholder='Enter Text' name='name' id='todo-name-input' />
        <input type='submit' value='Add Todo Item'
          onClick={(e) => {
            e.preventDefault();
            const todoTextInput = document.querySelector('#todo-name-input');
            handleAddTodoItem(todoTextInput.value);
          }} />
      </form>
    </React.Fragment>
  )
}

export default InputTextBar;
