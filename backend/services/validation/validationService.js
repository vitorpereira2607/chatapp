class ValidationService{
    validatePasswords(password, confirmPassword){
        if(password !== confirmPassword){
            throw new Error("Passwords do not match.");
        }
    }

    validatePasswordsLenght(password){
        if(password.length < 6){
            throw new Error("Password must be at least 6 characters long.")
        }
    }

    validateUserInput(fullName, username){
        if(!fullName || !username){
            throw new Error("Full name and username are required.");
        }
    }
}

export default new ValidationService();