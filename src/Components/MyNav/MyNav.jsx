import React from 'react'
import './MyNav.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Dropper from '../Dropper/Dropper'

function MyNav() {
  return (
        <div className="n-wrapper">
           <div className='category'>
            <ul>
                <li>
                    <button className='button n-button'>Men</button>
                </li>
                <li>
                    <button className='button n-button'>Women</button>                
                </li>
                <li>
                    <button className='button n-button'>Kids</button>
                </li>
            </ul>
           </div>
           <div className='homenav'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
           </div>
        </div>
    )
}

export default MyNav