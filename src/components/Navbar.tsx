import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Create from './modal'

function Navbar() {
  return (
    <nav className='navbar'>
        <h2>D&D 5e Battle</h2>
        <ul>
            <li>
               <Create className={"create_character"}/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar