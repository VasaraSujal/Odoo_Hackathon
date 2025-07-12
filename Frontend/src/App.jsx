import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/User/Dashboard'
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'

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
