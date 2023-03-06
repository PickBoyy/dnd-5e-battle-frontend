import React, {useState, Fragment} from 'react'
import { IPersonagem } from '../ModelsTs/ModeloDePersonagem'
import { DropdownItem } from 'reactstrap'

import {useAppContext} from './../hooks/context'
import { Characters } from '../Repository/RepoCharacter/Character'


const P1 = () => {

  const {player1,setPlayer1} = useAppContext()

  const handleAddCharacter = (character:IPersonagem) => {
    setPlayer1([...player1, character])
  }

  return (
    <>
      {Characters.map((character) => (
        <>
          <DropdownItem>
            <option onClick={()=> handleAddCharacter(character)}  value={character.nome}>{character.nome}</option>
          </DropdownItem>
        </>
      ))
      }
    </>
  )

}

export default P1