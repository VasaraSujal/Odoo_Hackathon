import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter } from "react-router-dom";
import Dashboard from './Pages/User/Dashboard'
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'


import Dashboard from './Pages/User/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Dashboard/> */}
     {/* <Login/> */}
     <Register/>
    </>
  ) 
}

export default App
