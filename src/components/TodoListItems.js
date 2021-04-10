import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const TodoListItems = ({ todoItems, removeTodoItem, completeTodoItem, priorityTodo }) => {

  return (
    <ul>
      {todoItems.map((item) => {
        const { id } = item;
        return <TodoListItem key={id}
          todoItem={item}
          removeTodoItem={removeTodoItem}
          completeTodoItem={completeTodoItem}
          priorityTodo={priorityTodo}
        />
      })}
    </ul>
  )
}

export default TodoListItems;


const TodoListItem = ({ todoItem, removeTodoItem, completeTodoItem, priorityTodo }) => {
  const { name, complete, priority } = todoItem;
  return (
    <li>
      <p>
        {!priority ?
          <AiOutlineStar fill='blue' onClick={() => priorityTodo(todoItem)} />
          :
          <AiFillStar fill='blue' onClick={() => priorityTodo(todoItem)} />
        }
        {/* ABOVE - COME BACK TO THIS AND TRY TO CHANGE THIS REPEATED CODE LATER */}

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
