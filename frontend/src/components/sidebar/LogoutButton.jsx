import { ArrowLeftStartOnRectangleIcon as LogoutIcon } from '@heroicons/react/24/solid'
import useLogout from '../../hooks/useLogout'

function LogoutButton() {

    const { loading, logout } = useLogout()
    return (
        <div className='mt-auto'>
            {loading ? (
                <span className='loading loading-spinner'></span>
            ) : (
                <LogoutIcon className="size-6 cursor-pointer" onClick={logout} />
            )}

        </div>
    )
}

export default LogoutButton