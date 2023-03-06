import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "../../hooks/context";
import { IPersonagem } from "../../ModelsTs/ModeloDePersonagem";

const inicialState: Array<IPersonagem> = [];

function LP1() {
  const {
    player1,
    setRenderCharacter,
    setInfoText1,
    chosenCharacters,
    setChosenCharacters,
  } = useAppContext();
  const [L1characters, setL1characters] =
    useState<Array<IPersonagem>>(inicialState); //LISTA 1

  useEffect(() => {
    setL1characters(player1);
    console.log(L1characters);
  }, [player1]);

  function handlerBord(character: IPersonagem) {
    setRenderCharacter(character.nome);
    setInfoText1("Escolha a posição do personagem!");
    setChosenCharacters([...chosenCharacters, character]);
    console.log(chosenCharacters)
  }

  return (
    <div>
      <div className="placeSelected">
        <p className="titleSelected">Selected Characters</p>

        {L1characters?.map((character: IPersonagem,index:number) => (
          <div
            className="placeCharacters"
            onClick={() => handlerBord(character)}
            key={index}
          >
            {character.nome}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LP1;

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
