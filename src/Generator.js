import React from 'react'
import {useState} from 'react'
import QRCode from 'qrcode'
import './Generator.css'

export const Generator = () => {
    const [url, setUrl] = useState('')
    const [qrCode, setQrCOde] = useState('')

    const generatorQr = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 1
        }, (err, url) => {
            if(err) return console.log(err);
        
            setQrCOde(url)
        })
    }

  return (
    <div>
        <h1 className='generator'>QR Code Generator</h1>
        <div> 
            <input value={url}
                    onChange={e => setUrl(e.target.value)}
                    placeholder='Enter an url'
            />
            <button onClick={generatorQr}>Generate</button>
        </div>
        <img src={qrCode} className='img'/>
    </div>
  )
}
