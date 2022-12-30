import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import './components/Navbar.css'
import { Button } from 'reactstrap'
import SelectCharacter from './components/buttons/SelectCharacter'
import Home from './routes/Home'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='grid'>
        <div className="left">
          <div className='select'>
            <hr />
            <h2>Choose the Character</h2>
                    <SelectCharacter className='btnSelect' text='Select' content={<Home/>}/>
                    <hr />
                    
          </div>
        </div>
        
        <div className="center">
        <Button color='dark'className='btn_battle'>Start Battle</Button>
        
        <div id="tabuleiro">
            <div className="casa" id="A1"> <img src=""/> </div>
            <div className="casa" id="A2"> <img src=""/> </div>
            <div className="casa" id="A3"> <img src=""/> </div>
            <div className="casa" id="B1"> <img src=""/> </div>
            <div className="casa" id="B2"> <img src=""/> </div>
            <div className="casa" id="B3"> <img src=""/> </div>
            <div className="casa" id="C1"> <img src=""/> </div>
            <div className="casa" id="C2"> <img src=""/> </div>
            <div className="casa" id="C3"> <img src=""/> </div>
        </div>
        </div>
       
        <div className="rigth">
        <div className='select'>
          <hr />
            <h2>Choose the Character</h2>
                     <SelectCharacter className='btnSelect' text='Select' content={<Home/>}/>
                    <hr />
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default App
