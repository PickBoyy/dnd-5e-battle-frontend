import axios from 'axios'
import React, {useState,useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import RpgUrl from '../Axios/config'
import ICharacter from '../models/ICharacter'

type MyProps = {

}


function Home(props:MyProps) {

  const[personagens,setPersonagens] = useState([])

  const getCharacter = async() => {
    try {
      const response = await RpgUrl.get('/personagem')
      const data = response.data;
      
      setPersonagens(data)
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCharacter();
  },[])

  return (
    <Fragment>
      {personagens.length === 0 ? (<p>Carregando...</p>) :(
      personagens.map((personagem:ICharacter) => (
        <Fragment  key={personagem.id}>
          <Link to={`/personagem/${personagem.nome}`}>
            <p>{personagem.nome}</p>
          </Link>
        </Fragment>
      ))
      )}
    </Fragment>
  )
}

export default Home