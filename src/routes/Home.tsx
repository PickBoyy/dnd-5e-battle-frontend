import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import RpgUrl from '../Axios/config'

type personagem = {
  id:number,
  nome:string,
  raca:string,
  classe:string,
  nivel: number,
}



function Home() {

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
    <div>
      <h1>Lista de Personagens!</h1>
      {personagens.length === 0 ? (<p>Carregando...</p>) :(
      personagens.map((personagem:personagem) => (
        <div className='personagem' key={personagem.id}>
          <hr />
          <Link to={`/personagem/${personagem.nome}`}>
            <h2>{personagem.nome}</h2>
          </Link>
          <p>{personagem.raca}</p>
          <p>{personagem.classe}</p>
          <p>{personagem.nivel}</p>
          <hr />
        </div>
      ))
      )}
    </div>
  )
}

export default Home