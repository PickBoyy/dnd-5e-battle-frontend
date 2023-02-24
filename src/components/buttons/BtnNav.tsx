import React, { useState} from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Create from '../modal';
import CreateMonster from '../modal/MonsterModal';
import CreateWeapon from '../modal/WeaponModal';


const BtnNav = ()=> {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
 


  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className='dropdown-toggleBoard'>Create</DropdownToggle>
        <DropdownMenu className='MenuCreate'>
        <Create  className={"create_character"}/>
        <CreateMonster className='create_monster'/>
        <CreateWeapon className='create_weapon'/>

        </DropdownMenu>
      </Dropdown>
      </>
  );
}


export default BtnNav;