import React from 'react';

const InputTextBar = ({ addTodoItem }) => {
  return (
    <React.Fragment>
      <form>
        <input type='text' placeholder='To-do name' name='name' id='todo-name-input' />
        <input type='submit' value='Add'
          onClick={(e) => {
            e.preventDefault();
            const todoTextInput = document.querySelector('#todo-name-input');
            addTodoItem(todoTextInput.value);
          }} />
      </form>
    </React.Fragment>
  )
}

export default InputTextBar;
