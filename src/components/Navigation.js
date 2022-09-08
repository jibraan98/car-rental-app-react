import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHome
} from 'react-icons/ai';
import {Link} from 'react-router-dom';
// import {HiSun, HiMoon} from 'react-icons/hi';
// import useLocalStorage from 'use-local-storage';

const Navigation = () => {

    return (
        <div className='app'>
    <Navbar expand='lg' className='navigation'>
      <Container>
        <Navbar.Brand ><Link className='name' to='/'>Find-A-Car</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to='/'><AiOutlineHome size={20}/></Link></Nav.Link>
            <Nav.Link><Link to='/LearnMore'>Learn More</Link></Nav.Link>
            <Nav.Link><Link to='/login'>Log In</Link></Nav.Link>
            <Nav.Link><Link to='/signup'>Sign Up</Link></Nav.Link>
            <Nav.Link><AiOutlineSearch size={25}/></Nav.Link>
            <Nav.Link><Link to='/profile'><AiOutlineUser size={25}/></Link></Nav.Link>
            {/* {symbolSwitch(theme)} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    
      );
}

export default Navigation