import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import './styles/App.scss'
const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
      </Routes>
    </Router>
  )
  
}

export default App
