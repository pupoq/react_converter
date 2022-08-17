import React from 'react'
import {useState} from 'react'

export const Translater = () => {
    let arr = [{
        ru: 'мама',
        eng: 'mother'
    },{
        ru: 'учитель',
        eng: 'teacher'
    },{
        ru: 'петух',
        eng: 'cock'
    },{
        ru: 'переводчик',
        eng: 'translater'
    },{
        ru: 'диван',
        eng: 'sofa'
    },{
        ru: 'адвокат',
        eng: 'lawyer'
    },{
        ru: 'бежать',
        eng: 'run'
    },{
        ru: 'мир',
        eng: 'world'
    },{
        ru: 'счастливый',
        eng: 'happy'
    },{
        ru: 'компьютер',
        eng: 'compukter'
    }, 
        
]

    const [first, setWord] = useState('')
    const [second, setTranslate] = useState('')

    const translate = () => {

        for(let item of arr){
            if(first.toLowerCase() == item.ru){
                setTranslate(item.eng)
                break
            } else if (first.toLowerCase() == item.eng){
                setTranslate(item.ru)
                break
            } else if (first.length == 0){
                alert('Введите слово!')
                setTranslate('Введите слово!')
                break
            } else {
                setTranslate('Слово не найдено!')
            }
        }
    }

  return (
    <div>
        <br></br>
        <input type='text' value={first} onChange={e => setWord(e.target.value)} placeholder='Kz'></input>
        <button onClick={translate}>Translate/Аудару</button>
        <div>{second}</div>
    </div>
  )
}
