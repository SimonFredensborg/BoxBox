import { useState } from 'react';
import LandingPage from './pages/LandingPage'
import Header from '@/components/Header'
import {NavigationMenuDemo} from '@/components/Headerdemo'
import './styles/main.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <Router>
    <NavigationMenuDemo/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
  </Router>
  )
}

export default App
