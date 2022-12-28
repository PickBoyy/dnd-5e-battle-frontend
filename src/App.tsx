import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import './components/Navbar.css'
import BtnBattle from './components/button'
import { Button } from 'reactstrap'


function App(props:Button) {
  return (
    <div className="App">
      <Navbar/>
      <Button color='dark'>Start Battle</Button>
      <div className='container'>
        <Outlet/>
      </div>
     
    </div>
  )
}

export default App
