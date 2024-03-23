"use client"
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function NavBar() {

  return (
    <div className="navbar">
        <Button className='menu-btn'>
          Home
        </Button>
        <Button className='menu-btn'>
          About Us
        </Button>
        <Button className='menu-btn'>
          Services
        </Button>
        <Button className='menu-btn'>
          Portfolio
        </Button>
        <Button className='menu-btn'>
          Projects
        </Button>
        <Button className='menu-btn'>
          Contact
        </Button>
    </div>
  );
}

export default NavBar