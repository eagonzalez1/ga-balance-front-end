import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navbar-div'>
          <h2>GA_balance</h2>
          <NavLink to='/'>
            <button>Home</button>
          </NavLink>
          <NavLink to='/posts/new'>
            <button>Add Post</button>
          </NavLink>
          <NavLink to='/profiles'>
            <button>Profiles</button>
          </NavLink>
          <NavLink to="" onClick={handleLogout}>
          <button>Log Out</button>
          </NavLink>
          <NavLink to='/changePassword'>
            <button>Change Password</button>
          </NavLink>
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
