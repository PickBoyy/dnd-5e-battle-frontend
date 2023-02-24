import React, { Fragment } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ICharacter from '../../models/ICharacter';
import "../../App.css"
import API1 from '../../API/API1';

const classes = [
  "barbaro",
  "bardo",
  "clerigo",
  "druid",
  "lutador"
]

const Classes = () => {
  return (
    <Fragment>
      {classes.map((classe:string) => (
        <Fragment>
          <DropdownItem>
            <option onClick={()=> {
              
            } }  value={classe}>{classe}</option>
          </DropdownItem>
        </Fragment>
      ))
      }
    </Fragment>
  )
}




type MyProps = {
  text:string,
  className:string,
  value:string
  
}
type MyState = {
    dropdownOpen: boolean;
    value:string
    character:Array <ICharacter>;
}

class  ClassBTN extends React.Component <MyProps, MyState>{
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
        <DropdownMenu> 
          <select onChange={this.selectingCharacter} value={this.state.value}>
            <Classes/>
          </select>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default ClassBTN