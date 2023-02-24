import BtnNav from "../buttons/BtnNav" 

function Navbar() {
  return (
    <nav className='navbar'>
        <h2>D&D 5e Battle</h2>
        <ul>
            <li>
              <BtnNav/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar