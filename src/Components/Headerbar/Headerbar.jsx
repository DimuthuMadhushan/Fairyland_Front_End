import React from 'react'
import './Headerbar.css'
import Logo from '../images/fairylandlogo.png'
import Dropper from '../Dropper/Dropper'
import CartImage from '../images/cart.png'

function Headerbar({name}) {
  let i=0;
  return (
    <div className='header'>
        <div className='n-left'>
             <img src={Logo} alt="" />   
        </div>
        <div className='n-right'>
          <div className='list'>
          <ul>
            <li>Dimuthu</li>
            <li><Dropper/></li>
            <li>
              <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction">
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