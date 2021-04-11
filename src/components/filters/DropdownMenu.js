import React from 'react';

const DropdownMenu = ({ sortTodoItemsByName, sortTodoItemsByPriority, sortTodoItemsByTimeCreated }) => {
  return (
    <React.Fragment>
      <button type='button' onClick={(e) => sortTodoItemsByName(e)}>Sort By Name</button>
      <button type='button' onClick={(e) => sortTodoItemsByPriority(e)}>Sort By Priority</button>
      <button type='button' onClick={(e) => sortTodoItemsByTimeCreated(e)}>Sort By Time Created</button>
    </React.Fragment>
  )
}

export default DropdownMenu;
