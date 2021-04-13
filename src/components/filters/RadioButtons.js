import React from 'react';

const RadioButtons = ({ setRadioBtnSelected, radioBtnOptions }) => {
  return (
    <React.Fragment>
      {radioBtnOptions.map(({ name, value }) => (
        <label key={value}>
          <input
            type='radio'
            value={value}
            name='listingOptions'
            defaultChecked={name === 'Display all'}
            onChange={() => setRadioBtnSelected({ name: name, value: value })}
          />
          {name}
        </label>
      ))}
    </React.Fragment>
  );
};

export default RadioButtons;
