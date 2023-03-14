import React, { useState, useEffect, useContext } from "react";
import { AppContext, useAppContext } from "../../hooks/context";
import "./style.css";
import { IMonstro } from "../../ModelsTs/ModeloDeMonstros";

const inicialState: Array<IMonstro> = [];

function LP2() {
  const {
    player2,
    setRenderCharacter,
    setInfoText2,
    chosenMonsters,
    setChosenMonsters
  } = useAppContext();

  const [LMonster, setLMonster] = useState<Array<IMonstro>>(inicialState); //LISTA 2

  useEffect(() => {
    setLMonster(player2);
    console.log(LMonster);
  }, [player2]);

  function handlerBord(monster: IMonstro) {
    setChosenMonsters(monster);
    setRenderCharacter(monster.nome);
    setInfoText2("Escolha a posição do monstro!");
    setChosenMonsters([...chosenMonsters, monster]);
    console.log(chosenMonsters)
  }

  return (
    <div>
      <div className="placeSelected">
        <p className="titleSelected">Selected Monsters</p>

        {LMonster?.map((monster: IMonstro) => (
          <div className="placeCharacters" onClick={() => handlerBord(monster)} key={monster.nome}>
            {monster.nome}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LP2;
