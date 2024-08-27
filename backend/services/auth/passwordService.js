import bcrypt from 'bcryptjs';

class PasswordService{
    async hashPassword(password){
        const salt = await bcrypt.genSalt(10);
        
        return await bcrypt.hash(password, salt)
    }
}

export default new PasswordService();