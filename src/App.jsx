
import './App.css';
import { Titulo } from './Components/Titulo';
import {Statistics} from './Components/Statistics';

function App() {



  return (
    <>
      <Titulo />
      <Statistics valueG={0} valueN={0} valueB={0}/>
    </>
  )
}

export default App
