import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import '../styles/Profile.css'

function Profile() {
    const [ openDropdown, setOpenDropdown ] = useState(false);
    const { logout, user } = useAuth();
    return (
        <>
            <button className="profileButton" onClick={() => setOpenDropdown((prev) => !prev)}>
                <img className='profileImg' src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile-img" />
            </button>
            
            {
                openDropdown && (
                    <div className="dropdownContent">
                        <section className="dropdownContentSection">
                            <header className="dropdownContentHeader">
                                <img className='dropdownContentImg' src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile-img" />
                                <h1 className='dropdownContentUsername'>
                                    <strong>{user.username}</strong>
                                </h1>
                                
                            </header>
                        </section>
                        <Link to={'/profile'}>Profile</Link>
                        <Link to={'/settings'}>Settings</Link>
                        <Link to='/' onClick={() => logout()}>Logout</Link>
                    </div>
                )
            }

        </>
        
    )
}

export default Profile