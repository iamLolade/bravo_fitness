import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
              {user && (
                <div>
                  <span>{user.email}</span>
                  <button onClick={handleLogout}>Log out</button>
                </div>
              )}
              {!user && (
                <div>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </div>
              )}
            </nav>
        </div>
    </header>
  )
}
