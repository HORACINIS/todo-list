import React from 'react';

const InputTextBar = ({ handleAddTodoItem }) => {
  return (
    <React.Fragment>
      <form>
        <input type='text' placeholder='To-do name' name='name' id='todo-name-input' />
        <input type='submit' value='Add'
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
