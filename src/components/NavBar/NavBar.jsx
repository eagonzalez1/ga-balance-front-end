import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav className='navbar-div'>
          <h2>GA_balance</h2>
          <NavLink to='/login'>
            <button>Log In</button>
          </NavLink>
          <NavLink to='/signup'>
            <button>Sign Up</button>
          </NavLink>
        </nav>
      }
    </>
  )
}

export default NavBar
