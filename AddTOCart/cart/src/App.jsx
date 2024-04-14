import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home'
import Cart from './assets/pages/cart'
import Header from './assets/componets/header'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
