import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout()
  }
  
  return (
    <header>
        <div className='nav'>
            <Link to='/'>
                <h1>Bravo Fitness</h1>
            </Link>
            <nav>
              <div>
                <button onClick={handleLogout}>Log out</button>
              </div>
              <div>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </div>
            </nav>
        </div>
    </header>
  )
}
