import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    {/* <Navbar /> */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    {/* <Footer /> */}
    </>
  )
}

export default App
