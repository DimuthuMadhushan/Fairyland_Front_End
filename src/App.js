

import './App.css';
import Footer from './Components/Footer/Footer';
import Headerbar from './Components/Headerbar/Headerbar';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import MyNav from './Components/MyNav/MyNav';
import Homepage from './Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='headerbar'><Headerbar /></div>
      <div className='mynav'><MyNav /></div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product/:id' element={<div className='itemdetail'><ItemDetail/></div>}/>
      </Routes>

      

    </div>
  );
}

export default App;
