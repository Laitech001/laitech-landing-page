import { NavLink } from 'react-router'
import logoimg from '../assets/laitech-logo.webp'
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logoimg} alt="Laitech Logo" loading='lazy' />
        <h1>
          <span className='L'>L</span>
          <span className='A'>A</span>
          <span className='I'>I</span>
          <span className='T'>T</span>
          <span className='E'>E</span>
          <span className='C'>C</span>
          <span className='H'>H</span>
        </h1>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/devteam" className={({ isActive }) => isActive ? "active" : ""}>
              Dev Team
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/servicePage" className={({ isActive }) => isActive ? "active" : ""}>
              Services
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Header