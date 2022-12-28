import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RpgUrl from '../../Axios/config';
import ICharacter from '../../models/ICharacter';
import "../../App.css"

type MyProps = {

}
type MyState = {

    DropdownMenu: Array<ICharacter>
    dropdownOpen: boolean;
}

class  SelectCharacter extends React.Component <MyProps, MyState>{
  constructor(props:MyProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      DropdownMenu: [],
    };
  }
   getCharacter = async() => {
    try {
      const response = await RpgUrl.get('/personagem')
      const data = response.data;
      console.log(data)
      this.setState({DropdownMenu:data})

    } catch (error) {
      console.log(error);
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  
  

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Select
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Pick</DropdownItem>
          <DropdownItem>Niendol</DropdownItem>
          <DropdownItem>Emy</DropdownItem>
          <DropdownItem>LuizaAD</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default SelectCharacter