import React from 'react'
import './Headerbar.css'
import Logo from '../images/fairylandlogo.png'
import Dropper from '../Dropper/Dropper'
import CartImage from '../images/cart.png'
import Cart from '../Cart/Cart'
import { Button } from 'react-bootstrap'

function Headerbar({ name }) {
  let i = 0;
  return (
    <div className='header'>
      <div className='n-left'>
        <img src={Logo} alt="" />
      </div>
      <div className='n-right'>
        <div className='list'>
          <ul>
            <li>
              <a href='/login'><Button className='but'>Login/Register</Button></a>
            </li>
            <li>Dimuthu</li>
            <li>
              
              <a
                href='/cart'
              >
            
                <img className='cart-image' src={CartImage} alt="" />
                <span className='cartw'>{i} Item(s)</span>

              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

  )
}

export default Headerbar