import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './Dropper.css'

function Dropper() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className='dropdownbar' variant="success" id="dropdown-basic">
          My Account
        </Dropdown.Toggle>
        <Dropdown.Menu className='menu'>
          <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Login </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Dropper