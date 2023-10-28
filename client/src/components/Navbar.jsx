import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import Profile from './Profile';
import '../styles/Navbar.css'

function Navbar() {
    const { isAuthenticated } = useAuth();

    return(
        <nav className="navbar">
            <Link to='/'>
                <h1 className="navbarTitle">Ruta Financiera</h1>
            </Link>
            <ul className="navbarUl">
                {isAuthenticated ? (
                    <>
                        <li className='navbarLi'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='navbarLi'>
                            <Link to='/tasks'>Tasks</Link>
                        </li>
                        <li className='navbarLi'>
                            <Link to='/add-task'>Add task</Link>
                        </li>
                        <Profile />
                    </>
                ) : (
                <>
                    <li className='navbarLi'>
                        <Link to='/login' className='navbarLinkLogin'>Login</Link>
                    </li>
                    <li className='navbarLi'>
                        <Link to='/register' className='navbarLinkRegister'>Register</Link>
                    </li>   
                </>    
                )}
            </ul>
        </nav>
    )
}

export default Navbar