import React from 'react';
import logo from '../../images/todo-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';


const Title = () => {
  return (
    <Navbar bg='dark' variant='dark' data-testid='logo'>
      <Navbar.Brand>
        <img
          alt='logo'
          src={logo}
          width='64'
          className="d-inline-block align-top"
        />
        <h3 data-testid='title'>My To-do List App <Badge variant="secondary">v.0.2.1d</Badge></h3>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Title;
