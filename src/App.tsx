import { useState } from 'react'
import './App.css'
import Header from '../src/root/components/Header/Header.tsx';
import Footer from './root/components/Footer/Footer.tsx';
import Body from './root/components/Body/Body.tsx';
import './root/components/Header/Header.css';
import './root/components/Footer/Footer.css';
import './root/components/Body/Body.css';

function App() {
  const [showStart, setShowStart] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [showProyect, setShowProyect] = useState(false);
  
  const handleStartClick = () => {
    setShowStart(true);
    setShowInfo(false);
    setShowContract(false);
    setShowProyect(false);
  };

  const handleInfoClick = () => {
    setShowInfo(true);
    setShowContract(false);
    setShowStart(false);
    setShowProyect(false);
  };

  const handleProyectClick = () => {
    setShowProyect(true);
    setShowInfo(false);
    setShowContract(false);
    setShowStart(false);
  };

  const handleContractClick = () => {
    setShowContract(true);
    setShowInfo(false);
    setShowStart(false);
    setShowProyect(false);
  };



  return (
    <div className="App">
      <Header onStartClick={handleStartClick} onInfoClick={handleInfoClick} onProyectClick={handleProyectClick} onContractClick={handleContractClick} showStart={false}  />
      <Body showStart={showStart} showInfo={showInfo} showProyect={showProyect} showContract={showContract}/>
      <Footer />
    </div>
  )
}

export default App
