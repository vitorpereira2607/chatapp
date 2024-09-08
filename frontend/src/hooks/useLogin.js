import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContex";
import { validateLogin } from "../utils/inputValidation";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})
    const { setAuthUser } = useAuthContext();
    
    const login = async ({username, password}) => {
        
        const validateErrors = validateLogin({username, password})
        
        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors)
            return;
        }

        setErrors({})
        setLoading(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ username, password})
            })

            const data = await response.json()

            if(data.error){
                throw new Error(data.error)
            }

            setAuthUser(data)

        } catch (error) {
            console.error(`Login failed: ${error.message}`)
            toast.error(error.message || 'An unexpected error occurred.')
        } finally {
            setLoading(false)
        }
    }

    return { loading, login, errors }
}

export default useLogin;
