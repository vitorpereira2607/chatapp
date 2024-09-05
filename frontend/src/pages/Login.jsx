import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-100 mb-4">Login <span className="text-slate-700">ChatApp</span></h1>
                <form>
                    <div className="mb-4">
                        <span className='text-base label-text'>Username</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <UserIcon className='size-4 opacity-70' />
                            <input type="text" className="grow" placeholder="Enter Username" />
                        </label>
                    </div>
                    <div>
                        <span className='text-base label-text'>Password</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <LockClosedIcon className='size-4 opacity-70' />
                            <input type="password" className="grow" placeholder='Enter Password' />
                        </label>
                    </div>

                    <div className='text-sm'>
                        {"Don't"} have an account?
                        <a href='#' className='hover:underline hover:text-blue-600 mt-2 inline-block ml-1' >
                        Register
                        </a>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;