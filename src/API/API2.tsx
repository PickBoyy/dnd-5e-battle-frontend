import React, {useState, Fragment} from 'react'
import { IMonstro } from '../ModelsTs/ModeloDeMonstros'
import { DropdownItem } from 'reactstrap'
import {useAppContext} from './../hooks/context'
import { Monsters } from '../Repository/RepoMonster'


const P2 = () => {

  const {player2,setPlayer2} = useAppContext()

  const handleAddCharacter = (monster:IMonstro) => {
    setPlayer2([...player2, monster])
  }

  return (
    <>
      {Monsters.map((monster) => (
        <>
          <DropdownItem>
            <option onClick={()=> handleAddCharacter(monster)}  value={monster.nome}>{monster.nome}</option>
          </DropdownItem>
        </>
      ))
      }
    </>
  )

}

export default P2