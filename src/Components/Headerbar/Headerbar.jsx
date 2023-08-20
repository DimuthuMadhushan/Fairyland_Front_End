
import './Headerbar.css'
import Logo from '../images/fairylandlogo.png'
import CartImage from '../images/cart.png'
import { Button } from 'react-bootstrap'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function Headerbar() {
  const navigate=useNavigate();
  const logout=async()=>{
      Cookies.remove('jwt');
      Cookies.remove('user');
      Cookies.remove('seti');
      Cookies.remove('dash');
      navigate('/')
  }
  return (
    
    <div className='header'>
      <div className='n-left'>
        <img src={Logo} alt="" />
      </div>
      <div className='n-right'>
        <div className='list'>
          <ul>
            <li>
              <a href='registraion'><Button className='but'>Register</Button></a>
            </li>
            <li>
              <a href='/login'><Button className='but'>Login</Button></a>
            </li>
            <li>
              <a ><Button onClick={()=>logout()} className='but'>Logut</Button></a>
            </li>
            <li className='usertxt'>{Cookies.get('user')}</li>
            <li>
              
              <a
                href='/cart'
              >
            
                <img className='cart-image' src={CartImage} alt="" />
                <span className='cartw'>{Cookies.get('numofitems')} Item(s)</span>

              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

  )
}

export default Headerbar