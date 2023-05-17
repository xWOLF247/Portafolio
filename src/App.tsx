import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/root/components/Header/Header.tsx';
import Footer from './root/components/Footer/Footer.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header /> 
      {
         <img src={reactLogo} className="App-logo" alt="logo" />
      }
      <Footer/>
    </div>

    </>
  )
}

export default App
