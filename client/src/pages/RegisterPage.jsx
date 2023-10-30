import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import '../styles/pagesStyles/RegisterPage.css'

function RegisterPage() {
    const {register, handleSubmit, formState: {
        errors
    }} = useForm()
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuthenticated) navigate('/')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })
    
    return (
        <div className='divRegister'>
            <div className='registerContainer'>
                {
                    registerErrors.map((error, i) => (
                        <div className="signupErrorAlert" key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='registerTitle'>Register</h1>
                <form onSubmit={onSubmit}>
                    <input type="email" {...register('email', {required: true})} 
                        className='emailInput'
                        placeholder='email...'
                    />
                    {
                        errors.username && (
                            <p className='emailErrors'>
                                email is required
                            </p>
                        )
                    }
                    <input type="text" {...register('username', {required: true})} 
                        className='usernameInput'
                        placeholder='username...'
                    />
                    {
                        errors.username && (
                            <p className='usernameErrors'>
                                Username is required
                            </p>
                        )
                    }
                    <input type="password" {...register('password', {required: true})} 
                        className='passwordInput'
                        placeholder='password...'
                    />
                    {
                        errors.username && (
                            <p className='passwordErrors'>
                                password is required
                            </p>
                        )
                    }
                    <button type='submit' className='registerSendButton bg-blue-500'>
                        Send
                    </button>
                </form>
                <p className='pRegisterText'>
                    You already have an account? <Link className="signLink" to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage