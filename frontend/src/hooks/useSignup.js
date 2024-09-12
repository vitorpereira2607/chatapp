import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContex";
import { validateSignup } from "../utils/inputValidation";

function useSignup() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const [errors, setErrors] = useState({})

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const validateErrors = validateSignup({ fullName, username, password, confirmPassword, gender })
        if (Object.keys(validateErrors).length > 0){
            setErrors(validateErrors)
        }

        setErrors({});
        setLoading(true);

        try {
            const response = await fetch(`${api_url}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender})
            })

            const data = await response.json();
            
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("user-info", JSON.stringify(data))
            setAuthUser(data)

            toast.success('Login success');

            return true;

        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false); 
        }
    }

    return { loading, signup, errors };
}

export default useSignup;
