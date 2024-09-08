import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../hooks/useSignup';
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
    
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignup();

    const handleOnChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const isSuccess = await signup(inputs)

            setInputs({
                fullName: '',
                username: '',
                password: '',
                confirmPassword: '',
            })

            if(isSuccess) {
                toast.success('Account created successfully');
            } 
            
        } catch (error) {
            console.error(error.message)
            toast.error('An unexpected error occurred.')
        }

    }

    const handleCheckbox = (e) => {
        setInputs({
            ...inputs,
            gender: e.target.value
        })
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <Toaster />
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-100 mb-4">Sign Up <span className="text-slate-700">ChatApp</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2 flex flex-col gap-2">
                        <span className='text-base label-text'>Full Name</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <UserIcon className='size-4 opacity-70' />
                            <input
                                type="text"
                                name="fullName"
                                className="grow"
                                placeholder="Enter Username"
                                value={inputs.fullName}
                                onChange={handleOnChange}
                            />
                        </label>
                        <span className='text-base label-text'>Username</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <UserIcon className='size-4 opacity-70' />
                            <input
                                type="text"
                                name='username'
                                className="grow"
                                placeholder="Enter Username"
                                value={inputs.username}
                                onChange={handleOnChange}
                            />
                        </label>

                        <span className='text-base label-text'>Password</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <LockClosedIcon className='size-4 opacity-70' />
                            <input
                                type="password"
                                name='password'
                                className="grow"
                                placeholder='Enter Password'
                                value={inputs.password}
                                onChange={handleOnChange}
                            />
                        </label>

                        <span className='text-base label-text'>Confirm Password</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <LockClosedIcon className='size-4 opacity-70' />
                            <input
                                type="password"
                                name='confirmPassword'
                                className="grow"
                                placeholder='Confirm Password'
                                value={inputs.confirmPassword}
                                onChange={handleOnChange}
                            />
                        </label>

                    </div>
                    <div className='flex mb-1'>
                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <span className="label-text">Male</span>
                                <input
                                    type="checkbox"
                                    className="checkbox border-slate-900"
                                    value="male"
                                    checked={inputs.gender === 'male'}
                                    onChange={handleCheckbox}
                                />
                            </label>
                        </div>
                        <label className="label cursor-pointer gap-2">
                            <span className="label-text">Female</span>
                            <input
                                type="checkbox"
                                className="checkbox border-slate-900"
                                value="female"
                                checked={inputs.gender === 'female'}
                                onChange={handleCheckbox}
                            />
                        </label>
                    </div>
                    <div className='text-sm'>
                        Already have an account?
                        <Link to='/login' className='hover:underline hover:text-blue-600 inline-block ml-1' >
                            Login
                        </Link>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;