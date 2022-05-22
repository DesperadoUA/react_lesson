import { NavLink } from 'react-router-dom'
import './style.css'
function Header() {
    return (
      <header className='header'>
          <div className='container'>
            <nav className='row nav-wrapper'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/price">Price</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
          </div>
      </header>
    )
  }
  export default Header
  