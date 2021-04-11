import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const TodoListItems = ({ todoItems, removeTodoItem, completeTodoItem, priorityTodo, radioBtnSelected }) => {

  const todoItemsSortedByRadioBtnSelection = todoItems.filter((item) => {
    switch (radioBtnSelected.value) {
      case '0': return item;
      case '1': return item?.isComplete === false;
      case '2': return item?.isComplete === true;
      default: return item;
    }
  })
  // For testing --------------------------------
  useEffect(() => {
    console.log(todoItemsSortedByRadioBtnSelection)
  }, [todoItemsSortedByRadioBtnSelection])
  // ---------------------------------------------

  return (
    <ul>
      {todoItemsSortedByRadioBtnSelection.map((item) => {
        return <TodoListItem key={uuidv4()}
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
  const { name, isComplete, priority } = todoItem;
  return (
    <li>
      <p>
        {!priority ?
          <AiOutlineStar fill='blue' onClick={() => priorityTodo(todoItem)} />
          :
          <AiFillStar fill='blue' onClick={() => priorityTodo(todoItem)} />
        }
        {/* ABOVE - COME BACK TO THIS AND TRY TO CHANGE THIS REPEATED CODE LATER */}

        <input type='checkbox' name='complete' checked={isComplete}
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
