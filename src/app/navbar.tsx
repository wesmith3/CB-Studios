"use client"
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function NavBar() {

  return (
    <div className="navbar">
        <Button className='menu-btn'>
          HOME
        </Button>
        <Button className='menu-btn'>
          ABOUT US
        </Button>
        <Button className='menu-btn'>
          SERVICES
        </Button>
        <Button className='menu-btn'>
          PORTFOLIO
        </Button>
        <Button className='menu-btn'>
          PROJECTS
        </Button>
        <Button className='menu-btn'>
          CONTACT
        </Button>
    </div>
  );
}

export default NavBar