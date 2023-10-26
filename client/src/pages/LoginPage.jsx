import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function LoginPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate()
    
    const onSubmit = handleSubmit(data => {
        signin(data)
    });
    
    useEffect(() => {
        if(isAuthenticated) navigate("/");
    }, [isAuthenticated]);

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    signinErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white rounded-md my-1" key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-2x1 font-bold'>Login</h1>
                <form onSubmit={onSubmit}>
                    <input type="email" {...register('email', {required: true})} 
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='email...'
                    />
                    {
                        errors.username && (
                            <p className='text-red-500'>
                                email is required
                            </p>
                        )
                    }
                    <input type="password" {...register('password', {required: true})} 
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='password...'
                    />
                    {
                        errors.username && (
                            <p className='text-red-500'>
                                password is required
                            </p>
                        )
                    }
                    <button type='submit' className='bg-sky-500 text-white px-4 py-2 rounded-md my-2 hover:bg-sky-600'>
                        Send
                    </button>
                </form>
                <p className='flex gap-x-2'>
                    Don't have an account yet? <Link className="text-slate-400 underline" to="/register">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage