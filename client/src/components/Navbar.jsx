import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import Profile from './Profile';

function Navbar() {
    const { isAuthenticated } = useAuth();

    return(
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'>
                <h1 className="text-2xl font-bold">Ruta Financiera</h1>
            </Link>
            <ul className="flex gap-x-9">
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/tasks'>Tasks</Link>
                        </li>
                        <li>
                            <Link to='/add-task'>Add task</Link>
                        </li>
                        <Profile />
                    </>
                ) : (
                <>
                    <li>
                        <Link to='/login' className='bg-indigo-500 px-4 py-1 rounded-sm'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register' className='bg-indigo-500 px-4 py-1 rounded-sm'>Register</Link>
                    </li>   
                </>    
                )}
            </ul>
        </nav>
    )
}

export default Navbar