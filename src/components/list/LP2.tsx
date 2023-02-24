import React, { useState,useEffect } from "react";
import ICharacter from "../../models/ICharacter";
import { useAppContext } from "../../hooks/context";


const inicialState:Array<ICharacter> = []

 function LP2()  {
  const {player2} = useAppContext()
  const[L2characters,setL2characters] = useState(inicialState)    //LISTA 2
  
  useEffect(()=> {
    setL2characters(player2)
    console.log(L2characters)
  },[player2]) 
  

return (
  <div>
    {L2characters?.map((character:ICharacter)=> (
      <div>
        {character.nome}
      </div>
    ))}
  </div>
)
}

export default LP2