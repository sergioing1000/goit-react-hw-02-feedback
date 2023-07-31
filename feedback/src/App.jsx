import { useState } from 'react'

import './App.css';
import { Titulo } from './Components/Titulo';
import { Botones } from './Components/Botones';
import {Statistics} from './Components/Statistics';



function App() {


  const initialContGoods = 0;
  const initialContNeutrals = 0;
  const initialContBads = 0;

  const [buttonsElement, cGoods, cNeutrals, cBads] = Botones({
    contGoods: initialContGoods,
    contNeutrals: initialContNeutrals,
    contBads: initialContBads,
  });


  

  return (
    <>
      <Titulo />
      
      {buttonsElement}

      <Statistics cGoods cNeutrals cBads/>
    </>
  )
}

export default App
