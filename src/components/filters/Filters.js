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

  const handleSortTodoItemsByName = (e) => {
    todoItems.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    })
    setTodoItems((prevState) => [...prevState]);
  }

  const handleSortTodoItemsByPriority = (e) => {
    todoItems.sort((a, b) => {
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
      return 0;
    })
    setTodoItems((prevState) => [...prevState]);
  }

  const handleSortTodoItemsByTimeCreated = (e) => {
    console.log('wena')
    setTodoItems(todoItems)
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
      <DropdownMenu
        sortTodoItemsByName={handleSortTodoItemsByName}
        sortTodoItemsByPriority={handleSortTodoItemsByPriority}
        sortTodoItemsByTimeCreated={handleSortTodoItemsByTimeCreated}
      />
    </React.Fragment>
  )
}

export default Filters;
