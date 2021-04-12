import React from 'react';

const RadioButtons = ({ selectionValue, selectionName, setRadioBtnSelected, radioBtnOptions }) => {
  return (
    <label >
      <input type='radio'
        value={selectionValue}
        name='listingOptions'
        onChange={(e) => {
          setRadioBtnSelected({ value: e.target.value, name: radioBtnOptions[e.target.value].name });
        }}
      />
      {selectionName}
    </label>
  )
}

export default RadioButtons;
