import toast from "react-hot-toast";


export function validateLogin({username, password}){
    const errors = {};

    if(!username || !password) {
        toast.error('Please fill in all fields');
    }

    if(!username) errors.username = "Please fill in your username."
    if(!password) errors.password = "Please fill in your password."

    return errors
}

export function validateSignup({ fullName, username, password, confirmPassword, gender }) {

    const errors = {}
    
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
    }

    if (!fullName) errors.fullName = "Please fill in your full name";
    if (!username) errors.username = "Please fill in your username";
    if (!password) errors.password = "Please fill in your password";
    if (!confirmPassword) errors.confirmPassword = "Please confirm your password";
    if (!gender) errors.gender = "Please select your gender";

    if (password && confirmPassword && password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    if (password && password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    return true;
}