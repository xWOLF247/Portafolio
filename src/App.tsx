import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/root/components/Header/Header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header /> 
      {
        'Aca va el contenido del header'
      }
    </div>

    </>
  )
}

export default App
