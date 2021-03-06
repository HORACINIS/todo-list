import React from 'react';
import Card from 'react-bootstrap/Card';

const MainMessage = ({ messageToDisplay }) => {
  return (
    <h1 className='mt-5' style={{ color: '#33adff' }}>
      <Card
        data-testid='main-message-id'
        body
      >{messageToDisplay}
      </Card>
    </h1>
  );
};

export default MainMessage;
