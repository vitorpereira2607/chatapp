import { useState } from "react";
import toast from "react-hot-toast";

function useSignup() {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });

        if (!success) return;

        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender})
            })

            console.log(response);

            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false); 
        }
    }

    return { loading, signup };
}

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        console.log(fullName, username, password, confirmPassword)
        toast.error("Please fill in all fields");
        return false;
    }

    if (password != confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return false;
    }

    return true;
}