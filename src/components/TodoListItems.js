import React from 'react';

const TodoListItems = ({ todoItems, removeTodoItem, completeTodoItem }) => {

  return (
    <ul>
      {todoItems.map((item) => {
        const { id } = item;
        return <TodoListItem key={id}
          todoItem={item}
          removeTodoItem={removeTodoItem}
          completeTodoItem={completeTodoItem}
        />
      })}
    </ul>
  )
}

export default TodoListItems;



const TodoListItem = ({ todoItem, removeTodoItem, completeTodoItem }) => {
  const { name, complete } = todoItem;
  return (
    <li>
      <p>
        <input type='checkbox' name='complete' checked={complete}
          onChange={(e) => completeTodoItem(e, todoItem)}
        />
        {name} <button onClick={() => {
          const removeItemConfirmation = window.confirm('Are you sure that you want to remove this to-do item?');
          removeItemConfirmation && removeTodoItem(todoItem);
        }}>Remove</button>
      </p>
    </li>
  )
}
