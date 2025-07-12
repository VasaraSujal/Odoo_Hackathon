import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Router , Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/User/Dashboard'
import Register from './Pages/Login/Register'
import Login from './Pages/Login/Login'


function App() {
  return (
    

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
}

export default App
