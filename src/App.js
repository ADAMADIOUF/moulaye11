import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Pages from './components/pages/Pages';
import Menu from './components/pages/Menu';
import Navbar from './Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/pages' element={<Pages />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App