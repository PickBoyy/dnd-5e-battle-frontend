import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css'
import Input from '../input';
import SelectCharacter from '../buttons/SelectCharacter';
import Home from '../../routes/Home';

type MyProps = {
    className:string,
    buttonLabel?:any,
    
}
type MyState = {
    modal: boolean
}


class Create extends React.Component <MyProps,MyState > {
  constructor(props:MyProps) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button className='btn_create' onClick={this.toggle}> Create your Character</Button>
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle} className='popup'>
          <ModalHeader toggle={this.toggle}>Choose Attributes</ModalHeader>
          <ModalBody>
          
          <Input type={"text"} 
           className={"createInp"}
           name={"Player's name"}
           value={''}
           required={true}/>

          <Input type={"text"} 
           className={"createInp"}
           name={"Nickname"}
           value={''}
           required={true}/>
            <br />

           <SelectCharacter className='createDown' text='Race' content={<Home/>}/>
            
           <SelectCharacter className='createDown' text='Class' content={<Home/>}/>
           <br />
           <Input type={"number"} 
           className={"IN"}
           name={"Force"}
           value={''}
           required={true}/>
      
            <Input type={"number"} 
           className={"IN"}
           name={"Dexterity"}
           value={''}
           required={true}/>
        
            <Input type={"number"} 
           className={"IN"}
           name={"Constitution"}
           value={''}
           required={true}/>
          
            <Input type={"number"} 
           className={"IN"}
           name={"Intelligence"}
           value={''}
           required={true}/>
          
            <Input type={"number"} 
           className={"IN"}
           name={"Wisdom"}
           value={''}
           required={true}/>
          
            <Input type={"number"} 
           className={"IN"}
           name={"Charisma"}
           value={0}
           required={true}/>
          



          
          
          </ModalBody>
          <ModalFooter >
            <Button className='btnSubmit' type='submit'  onClick={()=> console.log("meu cuzin")}>Create</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Create;