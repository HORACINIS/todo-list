import React from 'react';
import RadioButtons from './RadioButtons';
import DropdownMenu from './DropdownMenu';

const Filters = ({ setRadioBtnSelected, setTodoItems, todoItems }) => {
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
  
  const handleSortByNameTodoItems = (e) => {
    todoItems.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    })
    setTodoItems((prevState) => [...prevState]);
  }

  return (
    <React.Fragment>
      {RADIO_OPTIONS.map(({ value, name }) => (
        <RadioButtons key={value}
          selectionValue={value}
          selectionName={name}
          setRadioBtnSelected={setRadioBtnSelected}
          radioBtnOptions={RADIO_OPTIONS}
        />
      ))}
      <br />
      <DropdownMenu sortByNameTodoItems={handleSortByNameTodoItems} />
    </React.Fragment>
  )
}

export default Filters;
