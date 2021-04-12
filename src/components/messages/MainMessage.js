import React, { useState, useEffect } from 'react';

const MainMessage = ({ todoItems, radioBtnSelected: { value } }) => {
  const [messageToDisplay, setMessageToDisplay] = useState('Create a To-do');
  const numOfItems = todoItems.length;
  const btnSelectedValue = value;


  useEffect(() => {
    if (numOfItems === 0) {
      if (btnSelectedValue === '0') setMessageToDisplay('Create a To-do')
      if (btnSelectedValue === '1') setMessageToDisplay('No To-do items')
      if (btnSelectedValue === '2') setMessageToDisplay('No Complete items')
    }
  }, [numOfItems, btnSelectedValue])

  return (
    <div>
      <h1>{messageToDisplay}</h1>
    </div>
  )
}

export default MainMessage;
