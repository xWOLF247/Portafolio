import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/root/components/Header/Header.tsx';
import Footer from './root/components/Footer/Footer.tsx';

function App () {

  return (
    <>
      <div>
      <Header /> 
      <Footer></Footer>
    </div>

    </>
  )
}

export default App
