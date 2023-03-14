import React, { useState } from 'react'
import { batalha } from '../../Outros/batalha'
import './style.css'

export const PlaceBatle = () => {
  
    const[batalha,setBatalha] = useState('Inicie a batalha...')


    return (
    <div className='allBatle'>
        <h4 className='titleBatle'>Battle Details</h4>
        <div className='textBatle'>
            <p className='pBatle'>{batalha}</p>
        </div>
        
    </div>
  )
}
