import './App.css'
import Navbar from './components/navbar/Navbar'
import './components/navbar/Navbar.css'
import { Button } from 'reactstrap'
//---------------------------------------
//IMPORT BTNS
import BP1 from './components/buttons/BP1'
import BP2 from './components/buttons/BP2'
//---------------------------------------
//IMPORT LISTS
import LP2 from './components/list/LP2'
import LP1 from './components/list/LP1'
//------------------------------------------
import SelectBoard from './components/Boards/selectBoard'
import {DragDropContext} from 'react-beautiful-dnd'
import { useAppContext } from './hooks/context'
import ICharacter from './models/ICharacter'
import { Turno } from './scripts/Turno'



function App() {
  const {infoText1,infoText2,chosenCharacter2} = useAppContext()


  return (
    <div className="App">
      <Navbar/>
      <div className='grid'>
        <div className="left">
        <p className='infoText1'>{infoText1}</p>
          <div className='select'>
            <hr />
            <h2>Choose the Character</h2>
            <BP1 className='btnSelect' text='Select'/>
            <hr />
              <LP1/>
          </div>
        </div>
        
        <div className="center">
        <Button onClick={() => Turno()} color='dark'className='btn_battle'>Start Battle</Button>
        <hr />
        <SelectBoard/>
        </div>
        <div className="rigth">
        <p className='infoText2'>{infoText2}</p>
        <div className='select'>
          <hr />
            <h2>Choose the Character</h2>
            <BP2 className='btnSelect' text='Select'/>
            <hr />
              <LP2/>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default App
