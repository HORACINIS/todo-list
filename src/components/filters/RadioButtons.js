import React from 'react';

const RadioButtons = ({ selectionValue, selectionName, setRadioBtnSelected, radioBtnOptions }) => {
  return (
    <label >
      <input type='radio'
        value={selectionValue}
        name='listingOptions'
        // checked={radioBtnSelected.value === selectionValue}
        // TODO I need to set Display all checked by default 
        onChange={(e) => {
          setRadioBtnSelected({ value: e.target.value, name: radioBtnOptions[e.target.value].name });
        }}
      />
      {selectionName}
    </label>
  )
}

export default RadioButtons;
