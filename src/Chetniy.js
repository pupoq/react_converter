import React from 'react'
import {useState} from 'react'

export const Chetniy = () => {
    let [numbers, setCalc] = useState('')
    let [chet, setChet] = useState('')
    let [nechet, setNeChet] = useState('')
    let [sumchet, setSumChet] = useState('')
    let [sumnechet, setSumNeChet] = useState('')

    let calculate = () => {
        console.log(numbers)
        for(let item of numbers){
            if(item !== ',' && item % 2 == 0){
                ArrChet.push(item)
            } else if (item !== ',' && item % 2 != 0){
                ArrNeChet.push(item)
            }
        }
        setChet(ArrChet)
        setNeChet(ArrNeChet)
        for(let item of ArrChet){
            setSumChet(sumchet += item)
        }
        }
        let ArrChet = []
    let ArrNeChet = []

  return (
    <div>
        <input type='text' value={numbers} onChange={e => setCalc(e.target.value)}></input>
        <button onClick={calculate}>Разобрать</button>
        <ul>
            Четные 
            {ArrChet.map(element => <li key={element}>{element}</li>)}
            Сумма четных: {sumchet}
        </ul>
        <ul>
            Нечетные 
            {ArrNeChet.map(element => <li key={element}>{element}</li>)}
        </ul>
    </div>
  )
}
