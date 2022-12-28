import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <h2>
            <Link to={`/`}>RPG</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}></Link>
            </li>
            <li>
                <Link to={'/new'} className="new_btn">
                    Criar Personagem
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar