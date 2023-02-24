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




function App() {


  return (
    <div className="App">
      <Navbar/>
      <div className='grid'>
        <div className="left">
          <div className='select'>
            <hr />
            <h2>Choose the Character</h2>
            <BP1 className='btnSelect' text='Select'/>
            <hr />
              <LP1/>
              
              
                    
          </div>
        </div>
        
        <div className="center">
        <Button color='dark'className='btn_battle'>Start Battle</Button>
        <hr />
        
        <SelectBoard/>
        

        </div>
       
        <div className="rigth">
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
