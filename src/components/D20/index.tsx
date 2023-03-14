import React, { useContext, useState } from 'react'
import { D8,D20 } from '../../scripts/dados'
import './style.css'

export const PlaceD20 = () => {
    
    const[dadoValue,setDadoValue] = useState(D20())
    const[placeValue,setPlaceValue] = useState<string>('')

    
     const handlerD20 = () => { 
        const dado = D20()
        setDadoValue(dado)  
        setPlaceValue('ativo')

     }
  
    return (
    <div className='allPlaceDado'>
        <img src="https://cdn.discordapp.com/attachments/1073304685248794645/1082750150751047770/icons8-dado-64.png" width={60} alt="dado"/> <br/>
        <button  className='btnDado' onClick={() => handlerD20()}>Girar!</button>
        <div className='placeInfoDado'>
            {placeValue === 'ativo' && (<div className='placeValueDado'>
                <p className='placeTextDado'>{dadoValue}</p>
            </div>)}
        </div>
    </div>
  )
}
