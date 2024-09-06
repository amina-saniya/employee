import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add '
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><br /><br />
      <h1>WELCOME</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Add/>} />
        <Route path='/V' element={<View/>} />
      </Routes>
    </>
  )
}

export default App
