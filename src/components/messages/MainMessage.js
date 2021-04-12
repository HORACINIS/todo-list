import React, { useState, useEffect } from 'react';

const MainMessage = ({ todoItems, radioBtnSelected: { value } }) => {
  const numOfItems = todoItems.length;
  const btnSelectedValue = value;

  const [messageToDisplay, setMessageToDisplay] = useState('Create a To-do')

  // useEffect(() => {
  //   console.log(todoItems)
  //   console.log(value)
  // }, [value, todoItems])

  useEffect(() => {
    if (btnSelectedValue === '0' && numOfItems === 0) setMessageToDisplay('Create a To-do')
    if (btnSelectedValue === '1' && numOfItems === 0) setMessageToDisplay('No To-do items')
    if (btnSelectedValue === '2' && numOfItems === 0) setMessageToDisplay('No Complete items')



    console.log('Num of items')
    console.log(numOfItems)
    console.log('Button selected value')
    console.log(btnSelectedValue)
  }, [numOfItems, btnSelectedValue])



  // const messageToDisplay = todoItems === 0

  return (
    <div>
      <h1>{messageToDisplay}</h1>
    </div>
  )
}

export default MainMessage;
