import React, { useState,useEffect, useRef } from "react";
import ICharacter from "../../models/ICharacter";
import { useAppContext } from "../../hooks/context";
import { Button } from "reactstrap";



const inicialState:Array<ICharacter> = []

 function LP1()  {

  const {player1,setChosenCharacter1,setRenderCharacter,setInfoText1,chosenCharacter1} = useAppContext()
  const[L1characters,setL1characters] = useState(inicialState)    //LISTA 1
  // const dragItem:any = useRef();
  // const dragOverItem:any = useRef();
  
  // const dragStart = (e:any, position:any) => {
  //   dragItem.current = position;
  //   console.log(e.target.innerHTML);
  // };
  
  // const dragEnter = (e:any, position:any) => {
  // dragOverItem.current = position;
  // console.log(e.target.innerHTML);
  // };

  // const drop = (e:any) => {
  //   const copyListItems = [...L1characters];
  //   const dragItemContent = copyListItems[dragItem.current];
  //   copyListItems.splice(dragItem.current, 1);
  //   copyListItems.splice(dragOverItem.current, 0, dragItemContent);
  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setL1characters(copyListItems);
  // };

  useEffect(()=> {
    setL1characters(player1)
    console.log(L1characters)
  },[player1,]) 
  
  function handlerBord(character:ICharacter) {
    setRenderCharacter(character.nome)
    setInfoText1('escolha a posição do personagem')
    setChosenCharacter1(chosenCharacter1 + character)
  }

return (
  <div>
  {L1characters?.map((character:ICharacter)=> (
    <div className="placeCharacters" onClick={() => handlerBord(character)  }>
      {character.nome}
    </div>
  ))}
</div>
)
}

export default LP1