import React, { useState,Fragment } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './style.css'
import BoardX3 from './3x3';
import BoardX6 from './6x6';
import BoardX9 from './9x9';



const SelectBoard = ()=> {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tabuleiro,setTabuleiro] = useState('');



  const toggle = () => setDropdownOpen((prevState) => !prevState);
 


  return (
    <>
      <Dropdown className='btnBoard' isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className='dropdown-toggleBoard'>Select Board</DropdownToggle>
        <DropdownMenu className='dropdown-toggleMenu'>
            <DropdownItem><option onClick={()=> setTabuleiro('1') }>9x9</option></DropdownItem>
            <DropdownItem><option onClick={()=> setTabuleiro('2') }>6x6</option></DropdownItem>
            <DropdownItem><option onClick={()=> setTabuleiro('3') }>3x3</option></DropdownItem>
        </DropdownMenu>
      </Dropdown>
     {tabuleiro==='1' &&(<BoardX9/>)}
     {tabuleiro==='2' &&(<BoardX6/>)}
     {tabuleiro==='3' &&(<BoardX3/>)}
      </>
  );
}


export default SelectBoard;