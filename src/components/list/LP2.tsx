import React, { useState,useEffect, useContext } from "react";
import ICharacter from "../../models/ICharacter";
import { AppContext, useAppContext } from "../../hooks/context";
import './style.css'


const inicialState:Array<ICharacter> = []

 function LP2()  {
  const {player2,setChosenCharacter2,setRenderCharacter,setInfoText2,chosenCharacter2} = useAppContext()
  const[L2characters,setL2characters] = useState<Array<ICharacter>>(inicialState)    //LISTA 2

  useEffect(()=> {
    setL2characters(player2)
    console.log(L2characters)
  },[player2]) 

  function handlerBord(character:ICharacter) {
    setChosenCharacter2(character)
    setRenderCharacter(character.nome)
    setInfoText2('escolha a posição do personagem')
    setChosenCharacter2(chosenCharacter2 + character)
  }
  

return (
  <div>
    {L2characters?.map((character:ICharacter)=> (
      <div className="placeCharacters" onClick={() => handlerBord(character)  }>
        {character.nome}
      </div>
    ))}
  </div>
)
}

export default LP2