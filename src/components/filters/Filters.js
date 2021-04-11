import React from 'react';
import RadioButtons from './RadioButtons';

const Filters = ({ setRadioBtnSelected, radioBtnSelected }) => {
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

  return (
    <React.Fragment>
      {RADIO_OPTIONS.map((button) => (
        <RadioButtons key={button.value}
          selectionValue={button.value}
          selectionName={button.name}
          setRadioBtnSelected={setRadioBtnSelected}
          radioBtnOptions={RADIO_OPTIONS}
        />
      ))}
    </React.Fragment>
  )
}

export default Filters;
