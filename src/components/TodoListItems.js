import React from 'react';

const TodoListItems = ({ todoItems }) => {

  return (
    <ul>
      {todoItems.map((item, index) => {
        return (
          <TodoListItem key={index} {...item} />
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
