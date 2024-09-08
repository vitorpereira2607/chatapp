import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import {toast, Toaster} from 'react-hot-toast';

function Login() {

    const {loading, login, errors } = useLogin();
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const handleOnChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await login(inputs);
        } catch (error) {
            console.error(error.message);
            toast.error(error.message)
        }
    };

    
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <Toaster />
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-100 mb-4">Login <span className="text-slate-700">ChatApp</span></h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="">
                        <span className='text-base label-text'>Username</span>
                        <label className={`input input-bordered flex items-center gap-2 ${errors.username ? 'input-error' : ''}`}>
                            <UserIcon className='size-4 opacity-70' />
                            <input 
                            type="text" 
                            name="username" 
                            className="grow" 
                            placeholder="Enter Username"
                            value={inputs.username}
                            onChange={handleOnChange} 
                            />
                        
                        </label>
                    </div>
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    <div>
                        <span className='text-base label-text'>Password</span>
                        <label className={`input input-bordered flex items-center gap-2 ${errors.password ? 'input-error' : ''}`}>
                            <LockClosedIcon className='size-4 opacity-70' />
                            <input 
                            type="password" 
                            name="password"
                            className="grow" 
                            placeholder='Enter Password'
                            value={inputs.password}
                            onChange={handleOnChange}
                            />
                        </label>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                    <div className='text-sm'>
                        {"Don't"} have an account?
                        <Link to='/signup' className='hover:underline hover:text-blue-600 mt-2 inline-block ml-1' >
                        Register
                        </Link>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;