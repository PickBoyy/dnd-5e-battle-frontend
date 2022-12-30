import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RpgUrl from '../../Axios/config';
import ICharacter from '../../models/ICharacter';
import "../../App.css"
import Home from '../../routes/Home';


type MyProps = {
  content:any,
  text:string,
  className:string,
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

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  
  

  render() {
    return (
      <ButtonDropdown className={this.props.className} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.props.text}
        </DropdownToggle>
        <DropdownMenu>
         {this.props.content}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default SelectCharacter