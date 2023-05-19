import { useState } from 'react'
import './App.css'
import Header from '../src/root/components/Header/Header.tsx';
import Footer from './root/components/Footer/Footer.tsx';
import Body from './root/components/Body/Body.tsx';
import './root/components/Header/Header.css';
import './root/components/Footer/Footer.css';
import './root/components/Body/Body.css';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showContract, setShowContract] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleContractClick = () => {
    setShowContract(!showContract);
  };

  return (
    <div className="App">
      <Header onInfoClick={handleInfoClick} onContractClick={handleContractClick} />
      <Body showInfo={showInfo} showContract={showContract} />
      <Footer />
    </div>
  )
}

export default App
