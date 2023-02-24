import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from '../../input'; 
import RaceBTN from '../../buttons/RaceBTN';
import ClassBTN from '../../buttons/ClassBTN';

type MyProps = {
    className:string,
    
}
type MyState = {
    modal: boolean
}


class CreateWeapon extends React.Component <MyProps,MyState > {
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
        <Button className='btn_create' onClick={this.toggle}>Create Weapon</Button>
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

           <RaceBTN className='createDown' text='Race' value=''/>
            
           <ClassBTN className='createDown' text='Class' value='' />
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
           value={' '}
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

export default CreateWeapon;