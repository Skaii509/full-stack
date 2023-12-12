import React, { useRef } from 'react'

import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaBars, FaTimes } from 'react-icons/fa'

import Profile from './Profile'
import '../styles/componentsStyles/Navbar.css'

function Navbar () {
  const { isAuthenticated } = useAuth()
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header className='navbar'>
      <div className='navLeft'>
        <Link to='/'>
          <h1 className='navbarTitle'>Ruta Financiera</h1>
        </Link>
      </div>
      <div className='navRight'>
        <nav ref={navRef}>
          <ul className='navbarUl'>
            {isAuthenticated
              ? (
                <>
                  <li className='navbarLi' onClick={showNavbar}>
                    <Link to='/'>Inicio</Link>
                  </li>
                  <li className='navbarLi' onClick={showNavbar}>
                    <Link to='/tasks'>Tareas</Link>
                  </li>
                  <li className='navbarLi' onClick={showNavbar}>
                    <Link to='/calculator'>Ingresos</Link>
                  </li>
                  <li className='navbarLi' onClick={showNavbar}>
                    <Link to='/interes'>Interes compuesto</Link>
                  </li>
                  <li className='navbarLi' onClick={showNavbar}>
                    <Link to='/news'>Noticias</Link>
                  </li>
                  <Profile />
                  <button id='close-nav-btn' className='nav-btn close-nav-btn' onClick={showNavbar}>
                    <FaTimes />
                  </button>
                </>
                )
              : (
                <>
                  <li className='navbarLi'>
                    <Link to='/login' className='navbarLinkLogin'>Log In</Link>
                  </li>
                  <li className='navbarLi'>
                    <Link to='/register' className='navbarLinkRegister'>Sign Up</Link>
                  </li>
                  <button id='close-nav-btn' className='nav-btn close-nav-btn' onClick={showNavbar}>
                    <FaTimes />
                  </button>
                </>
                )}
          </ul>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  )
}

export default Navbar
