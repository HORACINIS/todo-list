import React from 'react';
import RadioButtons from './RadioButtons';
import Checkboxes from './Checkboxes';

const Filters = ({ setRadioBtnSelected }) => {
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
      {RADIO_OPTIONS.map(({ value, name }) => (
        <RadioButtons key={value}
          selectionValue={value}
          selectionName={name}
          setRadioBtnSelected={setRadioBtnSelected}
          radioBtnOptions={RADIO_OPTIONS}
        />
      ))}
      <br />
      <Checkboxes />
    </React.Fragment>
  )
}

export default Filters;
