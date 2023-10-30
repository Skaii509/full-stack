import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

import '../styles/pagesStyles/LoginPage.css'

function LoginPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate()
    
    const onSubmit = handleSubmit(data => {
        signin(data);
    });
    
    useEffect(() => {
        if(isAuthenticated) navigate("/");
    }, [isAuthenticated]);

    return (
        <div className='divLogin'>
            <div className='loginContainer'>
                {
                    signinErrors.map((error, i) => (
                        <div className="signinErrorAlert" key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='loginTitle'>Login</h1>
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
                    <button type="submit" className="loginSendButton bg-blue-500">Send</button>
                </form>
                <p className='pLoginText'>
                    Don't have an account yet? <Link className="signLink" to="/register">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage