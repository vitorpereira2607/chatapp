import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Login sucessful')
})

router.get('/logout', (req, res) => {
    res.send('Logout sucessful')
})

export default router;

