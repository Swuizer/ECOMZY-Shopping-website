import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';

const App = () => {

  const [slide, setSlide] = useState(true);

  useEffect( () => {
    // Set Slide;
  },[setTimeout(() => {
    setSlide(false);
  },3300)]);

  return (
    <div>
    {
      slide ? (<Hero slide={slide}/>):
      (
        <div>
          <div className='bg-slate-900'>
            <Navbar/>
          </div>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      )
    }
      
    </div>
  );
};

export default App;
