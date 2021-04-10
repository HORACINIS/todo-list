import React from 'react';
import RadioButtons from './RadioButtons';

const Filters = ({ setRadioBtnSelected }) => {
  // const [radioBtnSelected, setRadioBtnSelected] = useState({ value: 0 });

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
    <section onChange={(e) => {
      setRadioBtnSelected({ value: e.target.value, name: RADIO_OPTIONS[e.target.value].name })
    }}>

      {RADIO_OPTIONS.map((button) => (
        <RadioButtons key={button.value} selectionValue={button.value} selectionName={button.name} />
      ))}
    </section>
  )
}

export default Filters;
