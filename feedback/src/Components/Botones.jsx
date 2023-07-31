import { useState } from 'react';
import './Botones.css'

export const Botones = ({ contGoods, contNeutrals, contBads }) => {
  
  const [cGoods, setcGoods] = useState(contGoods);
  const [cNeutrals, setcNeutrals] = useState(contNeutrals);
  const [cBads, setcBads] = useState(contBads);

  const handleGoodButtonClick = () => {
    console.log("¡Good button clicked!");
    setcGoods (cGoods +1 );
  }

  const handleNeutralButtonClick = () => {
    console.log("¡Neutral button clicked!");
    setcNeutrals (cNeutrals +1 );
  }

  const handleBadButtonClick = () => {
    console.log("¡Bad button clicked!");
    setcBads (cBads +1 );
  }

  return [
    <ul className="BotonList">
      <li className="BotomGood"><button onClick={handleGoodButtonClick} >Good</button></li>
      <li className="BotomNeutral"><button onClick={handleNeutralButtonClick}>Neutral</button></li>
      <li className="BotomBad"><button onClick={handleBadButtonClick}>Bad</button></li>
    </ul>,
    cGoods,
    cNeutrals,
    cBads
  ];
}
