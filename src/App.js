import {useState} from 'react'
import { Chet } from './Chet'
import {Generator} from "./Generator"
import {Translater} from "./Translater"
import {Cities} from "./Cities"
import {Chetniy} from "./Chetniy"

function App() {
  const [amount, SetAmount] = useState('')
  const [result, SetRes] = useState(0)
  const hadnleInput = (event) => {
    SetAmount(event.target.value)
  }

  const results = () => {
    
    SetRes(amount * 475)
  }

  return (
    <div >
      <input type='number' onChange={hadnleInput} value={amount}></input>
      <button onClick={results}>Covert</button>
      <h3>Result: {result} KZT</h3>
      <Chet />
      <Generator />
      <Translater />
      <Cities />
      <Chetniy />
    </div>
  );
}

export default App;
