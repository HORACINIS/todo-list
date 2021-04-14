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
    if (menuItemName === 'Name') {
      todoItems.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
    } else if (menuItemName === 'Priority') {
      todoItems.sort((a, b) => {
        if (a.priority > b.priority) return -1;
        if (a.priority < b.priority) return 1;
        return 0;
      });
    } else if (menuItemName === 'Complete') {
      todoItems.sort((a, b) => {
        if (a.isComplete > b.isComplete) return -1;
        if (a.isComplete < b.isComplete) return 1;
        return 0;
      });
    } else if (menuItemName === 'Time Created') {
      todoItems.sort((a, b) => {
        if (a.index < b.index) return -1;
        if (a.index > b.index) return 1;
        return 0;
      });
    }
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
