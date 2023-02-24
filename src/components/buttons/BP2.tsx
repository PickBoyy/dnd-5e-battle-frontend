import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ICharacter from '../../models/ICharacter';
import "../../App.css"
import P2 from '../../API/API2';



type MyProps = {
  text:string,
  className:string,
  
}
type MyState = {
    dropdownOpen: boolean;
    value:string
    character:Array <ICharacter>;
}

class  BP2 extends React.Component <MyProps, MyState>{
  constructor(props:MyProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      value: ' ',
      character:[]
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  selectingCharacter = (event:React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({value: event.target.value})
  }  

  render() {
    return (
      <ButtonDropdown className={this.props.className} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.props.text}
        </DropdownToggle>
        <DropdownMenu onChange={this.selectingCharacter}>
         <P2/>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default BP2