import React from 'react'
import {useState} from 'react'

export const Chet = () => {
    const [num, SetAmount] = useState('')
    const [res, SetRes] = useState(0)
    const [chet, SetChet] = useState('')

    const hadnleInput = (event) => {
        SetAmount(event.target.value)
      }

    const convert = () => {
        let result = num.split('').map(Number)
        
        let arrSum = result.reduce((acc, el) => acc += el, 0)
        SetRes(arrSum)
        if(arrSum % 2 === 0){
            SetChet('Чет')
        } else if(arrSum % 2 !== 0){
            SetChet('Нечет')
        }
    }

    

  return (
    <div>
        <input type='text' onChange={hadnleInput} value={num}></input>
        <button onClick={convert}>Convert</button>
        <p>{res}, {chet}</p>
    </div>
  )
}
