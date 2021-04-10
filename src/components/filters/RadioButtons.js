import React from 'react';

const RadioButtons = ({ selectionValue, selectionName, radioButtonSelected }) => {
  return (
    <label>
      <input type='radio' value={selectionValue} name='listingOptions' />
      {selectionName}
    </label>
  )
}

export default RadioButtons;
