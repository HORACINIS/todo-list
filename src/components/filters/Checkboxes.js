import React from 'react';

const Checkboxes = () => {
  return (
    <label>
      <input type='checkbox' name='sortByPriority' onChange={ (e) => console.log(e.target.checked) } />
      Sort by priority and name
    </label>
  )
}

export default Checkboxes;
