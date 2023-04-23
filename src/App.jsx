import React from 'react'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./styles/App.css"
import "./styles/Header.css"
import Header from './components/Header';
import Product from './components/Product';
const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='*' element={<p>Page Not Found 404</p>}/>
      </Routes>
    </Router>
  )
  
}

export default App
