import { Link } from 'react-router'
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src="/src/assets/logo.png" alt="Laitech Logo" />
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/servicePage">Services</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header