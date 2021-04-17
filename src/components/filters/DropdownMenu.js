import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownMenu = ({ dropdownMenuBtnSelection, dropdownMenuOptions }) => {
  return (
    <DropdownButton id="dropdown-basic-button" size="sm" variant="secondary" title="Sort by">
      {dropdownMenuOptions.map(({ value, name }) => (
        <Dropdown.Item
          key={value}
          onClick={() => dropdownMenuBtnSelection(name)}>
          {name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownMenu;
