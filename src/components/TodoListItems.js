import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoListItems = ({ todoItems }) => {

  return (
    <ul>
      {todoItems.map((item) => {
        return (
          <TodoListItem key={uuidv4()} {...item} />
        )
      })}
    </ul>
  )
}

export default TodoListItems;



const TodoListItem = ({ name }) => {
  return (
    <li>
      <p>{name} <button>Remove</button></p>

    </li>
  )
}
