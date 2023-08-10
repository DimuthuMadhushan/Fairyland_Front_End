

import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Headerbar from './Components/Headerbar/Headerbar';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import MyNav from './Components/MyNav/MyNav';
import Homepage from './Homepage/Homepage';
import Contactus from './Components/Contact/Contactus';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Login from './Login/Login';


function App() {
  return (
    <div className="App">
      <div className='headerbar'><Headerbar /></div>
      <div className='mynav'><MyNav /></div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:id' element={<div className='itemdetail'><ItemDetail /></div>} />
        <Route path='/about' element={<div className='about'><About /></div>} />
        <Route path='/contact' element={<div className='contactus'><Contactus /></div>} />
        <Route path='/cart' element={<div className='cart'><Cart/></div>}/>
        <Route path='/login' element={<div className='login'><Login/></div>}/>
      </Routes>

      <div className='footer'><Footer /></div>

    </div>
  );
}

export default App;
