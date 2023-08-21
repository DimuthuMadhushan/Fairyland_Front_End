

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
import Registrationform from './Components/Registrationform/Registrtaionform';
import Mencloth from './Mencloth/Mencloth';
import Womencloth from './WomenCloth/Womencloth';
import Kidscloth from './KidsCloth/Kidscloth';
import { useState } from 'react';
import Settings from './Components/Settings/Settings';
import Update from './Components/Update/Update';
import Dashboard from './Dashboard/Dashboard';
import Additems from './Components/Additems/Additems';
import Updelitem from './Components/Updelitem/Updelitem';
import Customerlist from './Components/Customerlist/Customerlist';
import Customerdetails from './Components/Customerdetails/Customerdetails';

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
        <Route path='/registraion' element={<div className='registration'><Registrationform/></div>}/>
        <Route path='/men' element={<div className='men'><Mencloth/></div>}/>
        <Route path='/women' element={<div className='women'><Womencloth/></div>}/>
        <Route path='/kids' element={<div className='kids'><Kidscloth/></div>}/>
        <Route path='/setting' element={<div className='setting'><Settings/></div>}/>
        <Route path='/update' element={<div className='update'><Update/></div>}/>
        <Route path='/dashboard' element={<div className='dashboaard'><Dashboard/></div>}/>
        <Route path='/additem' element={<div className='additem'><Additems/></div>}/>
        <Route path='/updatedelitem' element={<div className='additem'><Updelitem/></div>}/>
        <Route path='/custlist' element={<div className='custlist'><Customerlist/></div>}/>
        <Route path='/custdetail' element={<div className='custdetail'><Customerdetails/></div>}/>
      </Routes>
      <div className='footer'><Footer /></div>

    </div>
  );
}

export default App;
