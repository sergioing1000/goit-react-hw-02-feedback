import { useState } from 'react';

import Nodata from "./nodata.jsx"
import './statistics.css'

function countTotalFeedback(num1,num2,num3) {
  return (num1+num2+num3);
}

function countPositiveFeedbackPercentage(num1, num2, num3) {
  
  const total = num1 + num2 + num3;
  return total !== 0 ? (num1 / total*100).toFixed(2) : 0;
}

export const Statistics = ( {valueG, valueN, valueB} ) => {

  const [cGoods, setcGoods] = useState(valueG);
  const [cNeutrals, setcNeutrals] = useState(valueN);
  const [cBads, setcBads] = useState(valueB);

  function handleGoodButtonClick () {
    setcGoods(cGoods + 1);
  }

  const handleNeutralButtonClick = () => {
    setcNeutrals(cNeutrals + 1);
  }

  const handleBadButtonClick = () => {
    setcBads(cBads + 1);
  }

  const showTable = cGoods + cNeutrals + cBads > 0;


  return (
      <>
  
      <ul className="BotonList">
        <li className="BotomGood"><button onClick={handleGoodButtonClick} >Good</button></li>
        <li className="BotomNeutral"><button onClick={handleNeutralButtonClick}>Neutral</button></li>
        <li className="BotomBad"><button onClick={handleBadButtonClick}>Bad</button></li>
      </ul>
      

      <h2>Statistics</h2>

      {showTable ? (
      <table className="tabla">
        <thead>
            <tr>
                <th>Tipo de feedback</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Good</td>
                <td>{cGoods}</td>
            </tr>
            <tr>
                <td>Neutral</td>
                <td>{cNeutrals}</td>
            </tr>
            <tr>
                <td>Bad</td>
                <td>{cBads}</td>
            </tr>
            <tr className='TOTALES'>
                <td>TOTAL</td>
                <td>{countTotalFeedback(cGoods,cNeutrals,cBads)}</td>
          </tr>
          <tr className='SUMMARY'>
            <td colSpan="2">Positive Feedback: {countPositiveFeedbackPercentage(cGoods,cNeutrals,cBads)}%</td>
          </tr>
        </tbody>
      </table>

      ) : (
          <Nodata />
      ) }
      
    </>
  )
}