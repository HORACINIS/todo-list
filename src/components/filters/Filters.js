import React from 'react';
import RadioButtons from './RadioButtons';
import DropdownMenu from './DropdownMenu';
import FormControl from '@material-ui/core/FormControl';

const Filters = ({ todoItems, setTodoItems, setRadioBtnSelected }) => {
  const RADIO_OPTIONS = [
    {
      value: 0,
      name: 'Display all'
    },
    {
      value: 1,
      name: 'To-do'
    },
    {
      value: 2,
      name: 'Complete'
    }
  ];

  const DROPDOWN_MENU_OPTIONS = [
    {
      value: 0,
      name: 'Name'
    },
    {
      value: 1,
      name: 'Priority'
    },
    {
      value: 2,
      name: 'Complete'
    },
    {
      value: 3,
      name: 'Time Created'
    }
  ];

  const dropdownMenuBtnSelection = (menuItemName) => {
    const sortingUp = (objAttr) => {
      todoItems.sort((a, b) => {
        if (a[objAttr] < b[objAttr]) { return -1 } else { return 1 };
      });
    };
    const sortingDown = (objAttr) => {
      todoItems.sort((a, b) => {
        if (a[objAttr] > b[objAttr]) { return -1 } else { return 1 };
      });
    };
    if (menuItemName === 'Name') sortingUp('name');
    else if (menuItemName === 'Priority') sortingDown('priority');
    else if (menuItemName === 'Complete') sortingDown('isComplete');
    else if (menuItemName === 'Time Created') sortingUp('index');
    setTodoItems((prevState) => [...prevState]);
  };

  return (
    <React.Fragment>
      {todoItems.length > 0 &&
        <FormControl component="fieldset">
          <RadioButtons
            radioBtnOptions={RADIO_OPTIONS}
            setRadioBtnSelected={setRadioBtnSelected}
          />
        </FormControl>
      }
      {todoItems.length > 1 &&
        <DropdownMenu
          dropdownMenuOptions={DROPDOWN_MENU_OPTIONS}
          dropdownMenuBtnSelection={dropdownMenuBtnSelection}
        />
      }
    </React.Fragment>
  );
};

export default Filters;
