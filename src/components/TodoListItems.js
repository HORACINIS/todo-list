import React from 'react';

const TodoListItems = ({ todoItems, removeTodoItem }) => {

  return (
    <ul>
      {todoItems.map((item) => {
        const { id } = item;
        return <TodoListItem key={id} {...item} removeTodoItem={removeTodoItem} />
      })}
    </ul>
  )
}

export default TodoListItems;



const TodoListItem = ({ id, name, removeTodoItem }) => {
  return (
    <li>
      <p>{name} <button onClick={() => {
        const removeItemConfirmation = window.confirm('Are you sure that you want to remove this to-do item?');
        removeItemConfirmation && removeTodoItem(id);
      }}>Remove</button>
      </p>
    </li>
  )
}
