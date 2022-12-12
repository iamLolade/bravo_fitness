import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
        <div className='nav'>
            <Link to='/'>
                <h1>Bravo Fitness</h1>
            </Link>
        </div>
    </header>
  )
}
