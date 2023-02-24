import React, {useState, Fragment} from 'react'
import ICharacter from '../models/ICharacter'
import { DropdownItem } from 'reactstrap'
import repoCharacter from '../RepoCharacter/Character'
import {useAppContext} from './../hooks/context'


const P2 = () => {

  const {player2,setPlayer2} = useAppContext()

  const handleAddCharacter = (character:ICharacter) => {
    setPlayer2([...player2, character])
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

export default P2