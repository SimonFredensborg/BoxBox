import { useState } from 'react';
import LandingPage from './pages/LandingPage'
import Header from '@/components/Header'
import './styles/main.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
  </Router>
  )
}

export default App
