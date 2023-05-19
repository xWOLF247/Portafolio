import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/root/components/Header/Header.tsx';
import Footer from './root/components/Footer/Footer.tsx';
import Body from './root/components/Body/Body.tsx';

function App() {
  const[showInfo, setShowInfo] = useState(false);
  const[showContract, setShowContract] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleContractClick = () => {
    setShowContract(!showContract);
  };


  return (
    <div className="App">
      <Header onInfoClick={handleInfoClick} onContractClick={handleContractClick}/> 
      <Footer/>
      <Body showInfo={showInfo} showContract={showContract}/>
      </div>
  
  )
}

export default App
