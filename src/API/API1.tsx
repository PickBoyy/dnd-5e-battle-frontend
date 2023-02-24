import React, {useState, Fragment} from 'react'
import ICharacter from '../models/ICharacter'
import { DropdownItem } from 'reactstrap'
import repoCharacter from '../RepoCharacter/Character'
import {useAppContext} from './../hooks/context'


const P1 = () => {

  const {player1,setPlayer1} = useAppContext()

  const handleAddCharacter = (character:ICharacter) => {
    setPlayer1([...player1, character])
  }

  

  return (
    
    <Fragment>
      {repoCharacter.map((character) => (
        <Fragment>
          <DropdownItem>
            <option onClick={()=> handleAddCharacter(character)}  value={character.nome}>{character.nome}</option>
          </DropdownItem>
        </Fragment>
      ))
      }
    </Fragment>
  )

}

export default P1