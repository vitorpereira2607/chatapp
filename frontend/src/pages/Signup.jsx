import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'

function Signup() {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-100 mb-4">Sign Up <span className="text-slate-700">ChatApp</span></h1>
                <form>
                    <div className="mb-2 flex flex-col gap-2">
                        <span className='text-base label-text'>Full Name</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <UserIcon className='size-4 opacity-70' />
                            <input type="text" className="grow" placeholder="Enter Username" />
                        </label>
                        <span className='text-base label-text'>Username</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <UserIcon className='size-4 opacity-70' />
                            <input type="text" className="grow" placeholder="Enter Username" />
                        </label>

                        <span className='text-base label-text'>Password</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <LockClosedIcon className='size-4 opacity-70' />
                            <input type="password" className="grow" placeholder='Enter Password' />
                        </label>

                        <span className='text-base label-text'>Confirm Password</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <LockClosedIcon className='size-4 opacity-70' />
                            <input type="password" className="grow" placeholder='Confirm Password' />
                        </label>

                    </div>
                    <div className='flex mb-1'>
                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <span className="label-text">Male</span>
                                <input type="checkbox" className="checkbox border-slate-900" />
                            </label>
                        </div>
                        <label className="label cursor-pointer gap-2">
                            <span className="label-text">Female</span>
                            <input type="checkbox" className="checkbox border-slate-900" />
                        </label>
                    </div>
                    <div className='text-sm'>
                        Already have an account?
                        <a href='#' className='hover:underline hover:text-blue-600 inline-block ml-1' >
                            Login
                        </a>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;