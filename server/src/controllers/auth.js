const prisma = require("./../lib/prisma");

const signUp = async (req, res) => {
    try {
        const {email, name, password} = req.body;
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password,
            },
        });
        return res.status(201).json({user});
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return res.status(401).json({message: 'Invalid credentials'});
        }
        if (user.password !== password) {
            return res.status(401).json({message: 'Invalid credentials'});
        }
        return res.status(200).json({token: user.id});
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
}


module.exports = {signUp, login};