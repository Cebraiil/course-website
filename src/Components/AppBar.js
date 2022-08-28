import React from 'react'

const AppBar = () => {
  return (
    <nav>
        <a href="" className='nav-logo'>Logo</a>
        <ul className="nav-links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <a className="button">Try for free</a>
    </nav>
  )
}

export default AppBar