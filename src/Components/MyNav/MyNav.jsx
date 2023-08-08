import React from 'react'
import './MyNav.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Dropper from '../Dropper/Dropper'

function MyNav() {
  return (
        <div className="n-wrapper">
           <div className="n-list">
                <ul>
                    <li>        
                        <Dropper/>
                    </li>
                                            <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li></li>
                </ul>
             </div>  
        </div>
    )
}

export default MyNav