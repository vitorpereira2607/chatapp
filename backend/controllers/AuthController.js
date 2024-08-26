class AuthController{

    async signup(req, res){
        try {
            const {name, surname} = await req.body;

            res.send({name, surname})
        } catch (error) {
            console.error(error)
        }
    }

    login(req, res){
        res.send("Login sucessfull");
    }
    
    logout(req, res){
        res.send("Logout sucessfull")
    }
}

export default new AuthController()