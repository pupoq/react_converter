import React from 'react'
import {useState} from 'react'

export const Cities = () => {

    let arr = [{city: "Astana", population: 1000000, id: 1},{city: "Almaty", population: 2000000, id: 2},{city: "Taraz", population: 350000, id: 3},{city: "Taldykorgan", population: 150000, id: 4},{city: "New-York", population: 8300000, id: 5},]

    let list = arr.map(element => <li key={element.toStr}>{element}</li>)


  return (
    <div>
        <ul>
            {arr.map(element => <li key={element.id}>City: {element.city}, Population{element.population}</li>)}
        </ul>
    </div>
  )
}
