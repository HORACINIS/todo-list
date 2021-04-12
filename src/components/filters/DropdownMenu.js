import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownMenu = ({ sortTodoItemsByName, sortTodoItemsByPriority, sortTodoItemsByTimeCreated }) => {
  return (
    <DropdownButton id="dropdown-basic-button" size="sm" variant="secondary" title="Sort by">
      <Dropdown.Item onClick={(e) => sortTodoItemsByName(e)}>Name</Dropdown.Item>
      <Dropdown.Item onClick={(e) => sortTodoItemsByPriority(e)}>Priority</Dropdown.Item>
      <Dropdown.Item onClick={(e) => sortTodoItemsByTimeCreated(e)}>Time Created</Dropdown.Item>
    </DropdownButton>
  )
}

export default DropdownMenu;
