import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/todo-logo.png'


const Title = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt='logo'
          src={logo}
          width='64'
          className="d-inline-block align-top"
        />{' '}
    <h3>My To-do List App</h3>
    </Navbar.Brand>
    </Navbar>
  )
}

export default Title
